import ArticleDetails from './UI/ArticleDetails/ArticleDetails'
import ArticleList from './UI/ArticleList/ArticleList'

export { ArticleDetails, ArticleList }

export type { Article} from './model/types/article'
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema'

export { articleDetailsActions, articleDetailsReducer } from './model/slice/articleDetailsSlice'

export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById'