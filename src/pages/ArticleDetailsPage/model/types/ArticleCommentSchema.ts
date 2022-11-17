import {Comment} from "entities/Comment";

export interface ArticleCommentSchema {
    isLoading?: boolean
    error?: string
    data?: Comment[]
}