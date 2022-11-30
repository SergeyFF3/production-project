import React, {useCallback} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticlesPage.module.scss'
import {useTranslation} from "react-i18next";
import {ArticleList} from 'entities/Article';
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {articlePageActions, getArticle} from "../../model/slices/articlePageSlice";
import {useSelector} from 'react-redux';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from "../../model/selectors/articlesPageSelectors/articlesPageSelectors";
import {ArticleView} from 'entities/Article/model/types/article';
import ArticleViewSelector from "features/ArticleViewSelector/ArticleViewSelector";
import Page from "widgets/Page/Page";
import {fetchNextArticlesPage} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import {initArticlesPage} from "../../model/services/initArticlesPage/initArticlesPage";

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

    const onLoadNextPart = useCallback( () => {
       dispatch(fetchNextArticlesPage())
    }, [dispatch])

    React.useEffect(() =>{
        dispatch(fetchNextArticlesPage())
    },[dispatch])

    React.useEffect(() => {
        dispatch(initArticlesPage())
    }, [dispatch])

    return (
        <Page
            onScrollEnd={onLoadNextPart}
            className={classNames(cls.ArticlesPage, {}, [className])}
        >
            <ArticleViewSelector
                view={view}
                onViewClick={onChangeView}
            />
            <ArticleList
                isLoading={isLoading}
                article={articles}
                view={view}
            />
        </Page>
    );
};

export default React.memo(ArticlesPage);