import React from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Texts.module.scss'

export enum TextsTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHN = 'right',
    CENTER = 'center',
    LEFT = 'left'
}

interface TextsProps {
    className?: string
    title?: string
    text?: string
    theme?: TextsTheme
    align?: TextAlign
}

const Texts = React.memo((props: TextsProps) => {

    const {
        title,
        text,
        className,
        align = TextAlign.LEFT,
        theme = TextsTheme.PRIMARY
    } = props

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,

    }

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});

export default Texts;