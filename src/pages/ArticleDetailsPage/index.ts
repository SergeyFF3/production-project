import ArticleDetailsPage from "./UI/ArticleDetailsPage/ArticleDetailsPage";

export { ArticleDetailsPage }

export { ArticleCommentSchema } from './model/types/ArticleCommentSchema'
export { fetchCommentByArticleId } from './model/services/fetchCommentByArticleId/fetchCommentByArticleId'
export { articleCommentReducer, getArticleComments } from './model/slices/articleCommentsSlice'