import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum
} from "../../selectors/articlesPageSelectors/articlesPageSelectors";
import {articlePageActions} from "pages/ArticlesPage/model/slices/articlePageSlice";
import {fetchArticlesList} from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesComment/fetchNextArticlesPage',
    async (_, {dispatch, getState}) => {

        const hasMore = getArticlesPageHasMore(getState())

        const page = getArticlesPageNum(getState())

        const isLoading = getArticlesPageIsLoading(getState())

        if (hasMore && !isLoading) {
            dispatch(articlePageActions.setPage(page + 1))
            dispatch(fetchArticlesList({
                page: page + 1
            }))
        }

    }
)


