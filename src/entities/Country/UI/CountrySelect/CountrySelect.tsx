import React, {useCallback} from 'react';
import cls from './CountrySelect.module.scss'
import {useTranslation} from "react-i18next";
import Select from "shared/UI/Select/Select";
import {Country} from "../../model/types/Country";
import {classNames} from "shared/lib/classNames/classNames";

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
    {value: Country.Armenia, content: Country.Armenia},
    {value: Country.Belarus, content: Country.Belarus},
    {value: Country.Kazakhstan, content: Country.Kazakhstan},
    {value: Country.Russia, content: Country.Russia},
    {value: Country.Ukraine, content: Country.Ukraine},
]

const CountrySelect = React.memo((props: CountrySelectProps) => {

    const {
        onChange,
        className,
        value,
        readonly
    } = props

    const {t} = useTranslation()

    const onChangeHandler = useCallback( (value: string) => {
        onChange?.(value as Country)
    }, [])

    return (
        <Select
            className={classNames(cls.select, {}, [className])}
            label={t('Укажите страну')}
            options={options}
            onChange={onChange}
            value={value}
            readonly={readonly}
        />
    );
});

export default CountrySelect;