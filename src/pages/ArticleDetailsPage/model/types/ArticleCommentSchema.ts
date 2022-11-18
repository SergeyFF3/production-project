import {Comment} from "entities/Comment";
import {EntityState} from "@reduxjs/toolkit";

export interface ArticleCommentSchema extends EntityState<Comment> {
    isLoading?: boolean
    error?: string
}