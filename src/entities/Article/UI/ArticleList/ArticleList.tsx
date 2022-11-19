import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleList.module.scss'
import {useTranslation} from "react-i18next";
import {Article, ArticleView} from "../../model/types/article";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

interface ArticleListProps {
    className?: string
    article: Article[]
    isLoading?: boolean
    view?: ArticleView
}

const ArticleList = (props: ArticleListProps) => {

    const {
        article,
        className,
        isLoading,
        view = ArticleView.TILE
    } = props

    const {t} = useTranslation()

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                key={article.id}
                article={article}
                view={ArticleView.LIST}
                className={cls.card}
            />
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {article.length > 0
                ? article.map(renderArticle)
                : null
            }
        </div>
    );
};

export default React.memo(ArticleList);