import React, {useCallback} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleListItem.module.scss'
import {useTranslation} from "react-i18next";
import {Article, ArticleBlockType, ArticleTextBlock, ArticleView} from "../../model/types/article";
import Texts from 'shared/UI/Text/Texts';
import EyeIcon from 'shared/assets/icons/eye.svg'
import Card from "shared/UI/Card/Card";
import Avatar from "shared/UI/Avatar/Avatar";
import Button, {ThemeButton} from 'shared/UI/Button/Button';
import ArticleTextBlockComponent from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import { useNavigate } from 'react-router-dom';

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleView
}

const ArticleListItem = ({className, article, view}: ArticleListItemProps) => {

    const {t} = useTranslation('article')

    const navigate = useNavigate()

    const types = <Texts text={article.type.join(', ')} className={cls.types}/>

    const onOpenArticle = useCallback( () => {
        navigate(RoutePath.article_details + article.id)
    }, [navigate, article.id])

    const views = (
        <>
            <Texts text={String(article.views)} className={cls.views}/>
            <EyeIcon className={cls.icon}/>
        </>
    )

    if (view === ArticleView.LIST) {

        let textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar}/>
                        <Texts text={article.user.username} className={cls.username}/>
                        <Texts text={article.createdAt} className={cls.createdAt}/>
                    </div>
                    <Texts title={article.title} className={cls.title}/>
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title}/>
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock}/>
                    )}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle} theme={ThemeButton.OUTLINE}>
                            {t('Читать далее...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card onClick={onOpenArticle} className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img alt={article.title} src={article.img} className={cls.img}/>
                    <Texts text={article.createdAt} className={cls.date}/>
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Texts text={article.title} className={cls.title}/>
            </Card>
        </div>
    );
};

export default React.memo(ArticleListItem);