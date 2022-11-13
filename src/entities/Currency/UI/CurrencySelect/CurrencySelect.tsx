import React, {useCallback} from 'react';
import cls from './CurrencySelect.module.scss'
import {useTranslation} from "react-i18next";
import {Currency} from "../../model/types/currency";
import Select from "shared/UI/Select/Select";
import {classNames} from "shared/lib/classNames/classNames";

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    {value: Currency.RUB, content: Currency.RUB},
    {value: Currency.EUR, content: Currency.EUR},
    {value: Currency.USD, content: Currency.USD},
]

const CurrencySelect = React.memo((props: CurrencySelectProps) => {

    const {
        onChange,
        className,
        value,
        readonly
    } = props

    const {t} = useTranslation()

    const onChangeHandler = useCallback( (value: string) => {
        onChange?.(value as Currency)
    }, [])

    return (
        <Select
            className={classNames(cls.select, {}, [className])}
            label={t('Укажите валюту')}
            options={options}
            onChange={onChange}
            value={value}
            readonly={readonly}
        />
    );
});

export default CurrencySelect;