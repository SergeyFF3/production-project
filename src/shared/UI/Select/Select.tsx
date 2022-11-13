import React, {ChangeEvent} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Select.module.scss'

export interface SelectOptions {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOptions[]
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}

const Select = React.memo((props: SelectProps) => {

    const {
        options,
        label,
        className,
        onChange,
        value,
        readonly
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    const optionsList = React.useMemo(() => {
        return options?.map((opt) => (
            <option
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.value}
            </option>
        ))
    }, [options])

    const mods: Mods = {}

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                disabled={readonly}
                className={cls.select}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});

export default Select;