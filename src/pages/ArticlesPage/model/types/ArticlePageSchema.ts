import {Article} from "entities/Article";
import {ArticleView} from "entities/Article/model/types/article";
import {EntityState} from "@reduxjs/toolkit";

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string
    view: ArticleView
    page: number
    limit?: number
    hasMore: boolean
    _inited: boolean
}