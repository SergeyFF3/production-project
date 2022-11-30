import {ProfileSchema} from "entities/Profile";
import {UserSchema} from "entities/User";
import {LoginSchema} from "features/AuthByUsername";
import {AxiosInstance} from "axios";
import {ArticleDetailsSchema} from "entities/Article";
import {ArticleCommentSchema} from "pages/ArticleDetailsPage";
import {AddCommentFormSchema} from "features/addCommentForm";
import {ArticlePageSchema} from "pages/ArticlesPage";
import {ScrollSaveSchema} from "features/ScrollSave";

export interface StateSchema {
    user: UserSchema,
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
    scrollSave: ScrollSaveSchema
    articleDetails?: ArticleDetailsSchema,
    articleComment?: ArticleCommentSchema,
    addCommentForm?: AddCommentFormSchema,
    articlesPage?: ArticlePageSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}