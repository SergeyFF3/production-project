import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './CommentList.module.scss'
import {useTranslation} from "react-i18next";
import Texts from "shared/UI/Text/Texts";
import CommentCard from "../CommentCard/CommentCard";
import { Comment } from '../../model/types/comment'

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

const CommentList = ({className, comments, isLoading}: CommentListProps) => {

    const {t} = useTranslation('article')

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
            ? comments.map( comment => (
                <CommentCard
                    key={comment.id}
                    className={cls.comment}
                    comment={comment}
                    isLoading={isLoading}
                />
                ))
            : <Texts text={t('Комментарии отсутствуют')}/>
            }
        </div>
    );
};

export default React.memo(CommentList);