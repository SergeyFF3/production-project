import ArticleDetails from './UI/ArticleDetails/ArticleDetails'

export { ArticleDetails }

export type { Article } from './model/types/article'
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema'

export { articleDetailsActions, articleDetailsReducer } from './model/slice/articleDetailsSlice'

export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById'