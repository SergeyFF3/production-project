import {StateSchema} from "app/providers/StoreProvider";

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleComment?.isLoading
export const getArticleCommentsError = (state: StateSchema) => state.articleComment?.error