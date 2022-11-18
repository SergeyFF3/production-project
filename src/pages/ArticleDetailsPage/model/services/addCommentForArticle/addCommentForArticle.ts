import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";
import {Comment} from "entities/Comment";
import {getUserAuthData} from "entities/User";
import {getArticleDetailsData} from "entities/Article/model/selectors/getArticleDetails";
import {fetchCommentByArticleId} from "pages/ArticleDetailsPage";

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, {extra, rejectWithValue, getState, dispatch}) => {

        const userData = getUserAuthData(getState())
        const article = getArticleDetailsData(getState())

        if (!userData || !text || !article) {
            return rejectWithValue('no data')
        }

        try {
            const response = await extra.api.post<Comment>('comments', {
                articleId: article.id,
                userId: userData.id,
                text
            })

            if (!response.data) {
                throw new Error()
            }

            dispatch(fetchCommentByArticleId(article.id))

            return response.data

        } catch (e) {
            return rejectWithValue(i18n.t('Ошибка'))
        }
    }
)