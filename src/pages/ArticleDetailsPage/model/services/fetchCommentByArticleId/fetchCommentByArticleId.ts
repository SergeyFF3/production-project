import {createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";
import {Comment} from "entities/Comment";


export const fetchCommentByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
    'articlesComment/fetchCommentByArticleId',
    async ( articleId, {extra, rejectWithValue} ) => {

        if (!articleId) {
            return rejectWithValue('error')
        }

        try {
            const response = await extra.api.get<Comment[]>('comments', {
                params: {
                    articleId,
                    _expand: 'user'
                }
            })

            return response.data

        } catch (e) {
            return rejectWithValue(i18n.t('Ошибка'))
        }
    }
)


