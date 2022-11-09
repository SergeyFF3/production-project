import React, {InputHTMLAttributes, memo} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Input.module.scss'

// Omit позволяет забрать из типа все пропсы, но исключить другие которые не нужны.
// Первым аргументом указываем что хотим забрать, а вторым что исключить.

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
}

// memo позволяет избежать лишних перерисовок

const Input = memo((props: InputProps) => {

    const {
        onChange,
        value,
        className,
        type = 'text',
        placeholder,
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});

export default Input;