import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleDetailsPage.module.scss'
import {useTranslation} from "react-i18next";
import {ArticleDetails} from "entities/Article";
import {useParams} from 'react-router-dom';
import Texts from 'shared/UI/Text/Texts';
import {CommentList} from "entities/Comment";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchCommentByArticleId } from '../../model/services/fetchCommentByArticleId/fetchCommentByArticleId'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {

    const {t} = useTranslation('article')

    const {id} = useParams<{ id: string }>()

    const dispatch = useAppDispatch()

    React.useEffect( () => {
        dispatch(fetchCommentByArticleId(id))
    }, [])

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                Статья не найдена
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id}/>
            <Texts className={cls.commentTitle} title={t('Комментарии')}/>
            <CommentList/>
        </div>
    );
};

export default React.memo(ArticleDetailsPage);