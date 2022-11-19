import ArticleDetails from './UI/ArticleDetails/ArticleDetails'
import ArticleList from './UI/ArticleList/ArticleList'

export { ArticleDetails }
export { ArticleList }

export type { Article, ArticleView } from './model/types/article'
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema'

export { articleDetailsActions, articleDetailsReducer } from './model/slice/articleDetailsSlice'

export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById'