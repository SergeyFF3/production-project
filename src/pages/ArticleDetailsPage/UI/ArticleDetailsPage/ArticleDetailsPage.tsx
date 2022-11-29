import React, {useCallback} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleDetailsPage.module.scss'
import {useTranslation} from "react-i18next";
import {ArticleDetails} from "entities/Article";
import {useNavigate, useParams} from 'react-router-dom';
import Texts from 'shared/UI/Text/Texts';
import {CommentList} from "entities/Comment";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchCommentByArticleId} from '../../model/services/fetchCommentByArticleId/fetchCommentByArticleId'
import {useSelector} from "react-redux";
import {getArticleComments} from "pages/ArticleDetailsPage";
import {getArticleCommentsIsLoading} from "../../model/selectors/comments";
import {AddCommentForm} from "features/addCommentForm";
import {addCommentForArticle} from "../../model/services/addCommentForArticle/addCommentForArticle";
import Button, {ThemeButton} from "shared/UI/Button/Button";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import Page from "shared/UI/Page/Page";

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {

    const {t} = useTranslation('article')

    const {id} = useParams<{ id: string }>()

    const dispatch = useAppDispatch()

    const comments = useSelector(getArticleComments.selectAll)

    const navigate = useNavigate()

    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

    const onBackToList = useCallback( () => {
        navigate(RoutePath.articles)
    }, [navigate])

   const onSendComment = React.useCallback((text: string) => {
       dispatch(addCommentForArticle(text))
   }, [dispatch])

    React.useEffect( () => {
        dispatch(fetchCommentByArticleId(id))
    }, [dispatch])

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        )
    }

    return (
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            <ArticleDetails id={id}/>
            <Texts className={cls.commentTitle} title={t('Комментарии')}/>
            <AddCommentForm onSendComment={onSendComment}/>
            <CommentList
            isLoading={commentsIsLoading}
            comments={comments}
            />
        </Page>
    );
};

export default React.memo(ArticleDetailsPage);