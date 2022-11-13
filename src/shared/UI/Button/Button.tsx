import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
    size?: ButtonSize
    disabled?: boolean
    children?: ReactNode
}

const Button = React.memo((props: ButtonProps) => {

    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.disabled]: disabled
    }

    return (
        <button
            type='button'
            disabled={disabled}
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});

export default Button;