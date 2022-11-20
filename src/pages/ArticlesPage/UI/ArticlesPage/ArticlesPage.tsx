import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticlesPage.module.scss'
import {useTranslation} from "react-i18next";
import {ArticleList} from 'entities/Article';
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticlesList} from "../../model/services/fetchArticlesList/fetchArticlesList";
import {getArticle} from "../../model/slices/articlePageSlice";
import {useSelector} from 'react-redux';
import {
    getArticlesPageIsLoading,
    getArticlesPageError,
    getArticlesPageView
} from "../../model/selectors/articlesPageSelectors/articlesPageSelectors";
import {ArticleView} from 'entities/Article/model/types/article';
import {articlePageActions} from '../../model/slices/articlePageSlice'
import ArticleViewSelector from "features/ArticleViewSelector/ArticleViewSelector";

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = ({className}: ArticlesPageProps) => {

    const {t} = useTranslation('article')

    const dispatch = useAppDispatch()

    const articles = useSelector(getArticle.selectAll)

    const isLoading = useSelector(getArticlesPageIsLoading)

    const error = useSelector(getArticlesPageError)

    const view = useSelector(getArticlesPageView)

    const onChangeView = React.useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setViews(view))
    }, [dispatch])

    React.useEffect(() => {
        dispatch(fetchArticlesList())
        dispatch(articlePageActions.initState())
    }, [dispatch])

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleViewSelector
                view={view}
                onViewClick={onChangeView}
            />
            <ArticleList
                isLoading={isLoading}
                article={articles}
                view={view}
            />
        </div>
    );
};

export default React.memo(ArticlesPage);