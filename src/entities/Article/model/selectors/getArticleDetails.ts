import {StateSchema} from "app/providers/StoreProvider";

export const getArticalDetailsData = (state: StateSchema) => state.articleDetails?.data
export const getArticalDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading
export const getArticalDetailsError = (state: StateSchema) => state.articleDetails?.error