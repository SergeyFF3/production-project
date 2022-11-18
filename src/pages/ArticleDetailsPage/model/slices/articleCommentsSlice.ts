import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit'
import {Comment} from "entities/Comment";
import {StateSchema} from "app/providers/StoreProvider";
import { ArticleCommentSchema } from "../types/ArticleCommentSchema";
import {fetchCommentByArticleId} from "../services/fetchCommentByArticleId/fetchCommentByArticleId";

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleComment || commentsAdapter.getInitialState()
)

const articleCommentsSlice = createSlice({
    name: 'articleCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleCommentSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentByArticleId.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchCommentByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false
                commentsAdapter.setAll(state, action)
            })
            .addCase(fetchCommentByArticleId.rejected, (state, action: PayloadAction<string>) => {
                state.isLoading = false
                state.error = action.payload
            })

    }
})

export const { reducer: articleCommentReducer } = articleCommentsSlice