import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleTextBlockComponent.module.scss'
import {useTranslation} from "react-i18next";
import {ArticleTextBlock} from "../../model/types/article";
import Texts from 'shared/UI/Text/Texts';

interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}

const ArticleTextBlockComponent = ({className, block}: ArticleTextBlockComponentProps) => {

    const {t} = useTranslation()

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Texts title={block.title} className={cls.title}/>
            )}
            {block.paragraphs.map(paragraph => (
                <Texts key={paragraph} text={paragraph} className={cls.paragraph}/>
                )
            )}
        </div>
    );
};

export default React.memo(ArticleTextBlockComponent);