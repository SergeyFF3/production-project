import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './CommentCard.module.scss'
import {Comment} from '../../model/types/comment'
import Avatar from 'shared/UI/Avatar/Avatar';
import Texts from 'shared/UI/Text/Texts';
import Skeleton from "shared/Skeleton/Skeleton";

interface CommentCardProps {
    className?: string
    comment: Comment
    isLoading?: boolean
}

const CommentCard = ({className, comment, isLoading}: CommentCardProps) => {

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div>
                    <Skeleton width={30} height={30} border="50%"/>
                    <Skeleton className={cls.username} height={16} width={100}/>
                </div>
                <Skeleton className={cls.text} width={"100%"} height={50}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar
                    ? <Avatar
                        className={cls.username}
                        size={30}
                        src={comment.user.avatar}
                    />
                    : null
                }
                <Texts title={comment.user.username}/>
            </div>
            <Texts text={comment.text}/>
        </div>
    );
};

export default React.memo(CommentCard);