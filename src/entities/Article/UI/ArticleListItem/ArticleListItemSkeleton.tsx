import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleListItem.module.scss'
import {Article, ArticleView} from "../../model/types/article";
import Card from "shared/UI/Card/Card";
import Skeleton from 'shared/Skeleton/Skeleton';

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleView
}

const ArticleListItemSkeleton = ({className, view}: ArticleListItemSkeletonProps) => {

    if (view === ArticleView.LIST) {


        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton border={'50%'} height={30} width={30} />
                        <Skeleton width={150} height={16} className={cls.username}/>
                        <Skeleton width={150} height={16} className={cls.createdAt}/>
                    </div>
                    <Skeleton width={250} height={24} className={cls.title}/>
                    <Skeleton height={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200}/>
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton height={200} width={200} className={cls.img}/>
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16}/>
                </div>
                <Skeleton height={16} width={150} className={cls.title}/>
            </Card>
        </div>
    );
};

export default React.memo(ArticleListItemSkeleton);