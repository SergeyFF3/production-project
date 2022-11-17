import {ProfileSchema} from "entities/Profile";
import {UserSchema} from "entities/User";
import {LoginSchema} from "features/AuthByUsername";
import {AxiosInstance} from "axios";
import {ArticleDetailsSchema} from "entities/Article";
import {ArticleCommentSchema} from "pages/ArticleDetailsPage";

export interface StateSchema {
    user: UserSchema,
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema,
    articleComment?: ArticleCommentSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}