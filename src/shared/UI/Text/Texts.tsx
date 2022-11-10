import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Texts.module.scss'

export enum TextsTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextsProps {
    className?: string
    title?: string
    text?: string
    theme?: TextsTheme
}

const Texts = React.memo((props: TextsProps) => {

    const {
        title,
        text,
        className,
        theme = TextsTheme.PRIMARY
    } = props

    return (
        <div className={classNames(cls.Text, {[cls[theme]]: true}, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});

export default Texts;