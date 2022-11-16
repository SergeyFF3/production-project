import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleDetails.module.scss'
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticleById} from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticalDetailsData,
    getArticalDetailsError,
    getArticalDetailsIsLoading
} from "../../model/selectors/getArticleDetails";
import {useSelector} from "react-redux";
import Loader from "shared/Loader/Loader";
import Texts, {TextAlign} from "shared/UI/Text/Texts";
import Skeleton from "shared/Skeleton/Skeleton";

interface ArticleDetailsProps {
    className?: string
    id: string
}

const ArticleDetails = (props: ArticleDetailsProps) => {

    const {
        className,
        id
    } = props

    const {t} = useTranslation('article')

    const dispatch = useAppDispatch()

    const isLoading = true
    // const isLoading = useSelector(getArticalDetailsIsLoading)

    const article = useSelector(getArticalDetailsData)

    const error = useSelector(getArticalDetailsError)

    React.useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id])

    if (isLoading) {
        return (
            <div>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%"/>
                <Skeleton className={cls.title} width={300} height={32}/>
                <Skeleton className={cls.skeleton} width={600} height={24}/>
                <Skeleton className={cls.skeleton} width="100%" height={200}/>
                <Skeleton className={cls.skeleton} width="100%" height={200}/>
            </div>
        );
    }

    if (error) {
        return (
            <Texts
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}
            />
        );
    }

    return (
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
        </div>
    );
};

export default React.memo(ArticleDetails);