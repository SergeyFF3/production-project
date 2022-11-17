import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleImageBlockComponent.module.scss'
import {useTranslation} from "react-i18next";
import {ArticleImageBlock} from "../../model/types/article";
import Texts, {TextAlign} from "shared/UI/Text/Texts";

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

const ArticleImageBlockComponent = ({className, block}: ArticleImageBlockComponentProps) => {

    const {t} = useTranslation()

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
           <img className={cls.img} src={block.src} alt={block.title}/>
            {block.title && (
                <Texts text={block.title} align={TextAlign.LEFT}/>
            )}
        </div>
    );
};

export default React.memo(ArticleImageBlockComponent);