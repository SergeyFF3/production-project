import React from 'react';
import cls from './ArticleDetails.module.scss'
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticleById} from '../../model/services/fetchArticleById/fetchArticleById';
import EyeIcon from 'shared/assets/icons/eye.svg'
import Calendar from 'shared/assets/icons/calendar.svg'
import {useSelector} from "react-redux";
import Texts, {TextAlign, TextSize} from "shared/UI/Text/Texts";
import Skeleton from "shared/Skeleton/Skeleton";
import Avatar from "shared/UI/Avatar/Avatar";
import {ArticleBlock, ArticleBlockType} from "../../model/types/article";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from "../../model/selectors/getArticleDetails";
import ArticleCodeBlockComponent from "entities/Article/UI/ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import ArticleImageBlockComponent from "entities/Article/UI/ArticleImageBlockComponent/ArticleImageBlockComponent";
import ArticleTextBlockComponent from "entities/Article/UI/ArticleTextBlockComponent/ArticleTextBlockComponent";

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

    const isLoading = useSelector(getArticleDetailsIsLoading)

    const article = useSelector(getArticleDetailsData)

    const error = useSelector(getArticleDetailsError)

    const renderBlock = React.useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                )
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                )
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                )
            default:
                return null
        }
    }, [])

    React.useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id])

    if (isLoading) {
        return (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%"/>
                <Skeleton className={cls.title} width={300} height={32}/>
                <Skeleton className={cls.skeleton} width={600} height={24}/>
                <Skeleton className={cls.skeleton} width="100%" height={200}/>
                <Skeleton className={cls.skeleton} width="100%" height={200}/>
            </>
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
        <div>
            <div className={cls.avatarWrapper}>
                <Avatar
                    size={200}
                    src={article?.img}
                    className={cls.avatar}
                />
            </div>
            <Texts
                size={TextSize.L}
                title={article?.title}
                text={article?.suptitle}
            />
            <div className={cls.articleInfo}>
                <EyeIcon className={cls.icon}/>
                <Texts text={String(article?.views)}/>
            </div>
            <div className={cls.articleInfo}>
                <Calendar className={cls.icon}/>
                <Texts text={article?.createdAt}/>
            </div>
            {article?.blocks.map(renderBlock)}
        </div>
    );
};

export default React.memo(ArticleDetails);