import {createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";
import {Article} from "../../types/article";


export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articles/fetchArticleById',
    async ( articleId, {extra, rejectWithValue} ) => {
        try {
            const response = await extra.api.get<Article>(`articles/${articleId}`)

            return response.data

        } catch (e) {
            console.log(e)
            return rejectWithValue(i18n.t('Ошибка'))
        }
    }
)















