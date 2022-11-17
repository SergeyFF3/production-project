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

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface TextsProps {
    className?: string
    title?: string
    text?: string
    theme?: TextsTheme
    align?: TextAlign
    size?: TextSize
}

const Texts = React.memo((props: TextsProps) => {

    const {
        title,
        text,
        className,
        align = TextAlign.LEFT,
        theme = TextsTheme.PRIMARY,
        size = TextSize.M
    } = props

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,

    }

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});

export default Texts;