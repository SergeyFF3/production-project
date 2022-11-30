import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getArticlesPageInited} from "../../selectors/articlesPageSelectors/articlesPageSelectors";
import {articlePageActions} from "pages/ArticlesPage/model/slices/articlePageSlice";
import {fetchArticlesList} from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesComment/initArticlesPage',
    async (_, {dispatch, getState}) => {

        const inited = getArticlesPageInited(getState())

        if (!inited) {
            dispatch(articlePageActions.initState())
            dispatch(fetchArticlesList({
                page: 1
            }))
        }

    }
)

