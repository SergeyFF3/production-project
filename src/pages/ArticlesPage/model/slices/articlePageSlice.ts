import {createEntityAdapter, createSlice, PayloadAction,} from '@reduxjs/toolkit'
import {StateSchema} from "app/providers/StoreProvider";
import {Article} from "entities/Article";
import {ArticleView} from "entities/Article/model/types/article";
import {ArticlePageSchema} from '../types/ArticlePageSchema';
import {fetchArticlesList} from "../../model/services/fetchArticlesList/fetchArticlesList";
import {ARTICLE_VIEW_LOCALSTORAGE_KEY} from "shared/const/localstorage";


const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
})

export const getArticle = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        error: undefined,
        view: ArticleView.TILE,
        page: 1,
        hasMore: true,
        ids: [],
        _inited: false,
        entities: {}
    }),
    reducers: {
        setViews: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        initState: state => {
            const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView
            state.view = view
            state.limit = view === ArticleView.LIST ? 4 : 9
            state._inited = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false
                articlesAdapter.addMany(state, action.payload)
                state.hasMore = action.payload.length > 0
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })

    }
})

export const {
    reducer: articlePageReducer,
    actions: articlePageActions
} = articlePageSlice