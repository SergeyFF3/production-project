import React, {InputHTMLAttributes, memo} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Input.module.scss'

// Omit позволяет забрать из типа все пропсы, но исключить другие которые не нужны.
// Первым аргументом указываем что хотим забрать, а вторым что исключить.

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    readonly?: boolean
}

// memo позволяет избежать лишних перерисовок страницы

const Input = memo((props: InputProps) => {

    const {
        onChange,
        value,
        className,
        type = 'text',
        readonly,
        placeholder,
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const mods: Mods = {
        [cls.readonly]: true
    }

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <input
                className={cls.input}
                type={type}
                placeholder={placeholder}
                value={value}
                readOnly={readonly}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});

export default Input;