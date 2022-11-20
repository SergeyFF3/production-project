import {createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";
import {Article} from "entities/Article";


export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlesComment/fetchCommentByArticleId',
    async ( articleId, {extra, rejectWithValue} ) => {

        try {
            const response = await extra.api.get<Article[]>('articles', {
                params: {
                    // expand: user нужен для отрисовки аватарки пользователя
                    _expand: 'user'
                }
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data

        } catch (e) {
            return rejectWithValue(i18n.t('Ошибка'))
        }
    }
)


