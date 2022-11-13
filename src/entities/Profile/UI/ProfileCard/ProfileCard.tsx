import React from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './ProfileCard.module.scss'
import {useTranslation} from "react-i18next";
import Input from 'shared/UI/Input/Input';
import {Profile} from "../../model/types/Profile";
import Loader from "shared/Loader/Loader";
import Texts, {TextAlign, TextsTheme} from "shared/UI/Text/Texts";
import Avatar from "shared/UI/Avatar/Avatar";
import {Currency} from "entities/Currency";
import CurrencySelect from "entities/Currency/UI/CurrencySelect/CurrencySelect";
import {Country} from "entities/Country/model/types/Country";
import CountrySelect from "entities/Country/UI/CountrySelect/CountrySelect";

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeFirstname?: (value: string) => void
    onChangeLastname?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeUsername?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeCurrency?: (currency: Currency) => void
    onChangeCountry?: (country: Country) => void
}

const ProfileCard = (props: ProfileCardProps) => {

    const {
        className,
        data,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        error,
        readonly,
        onChangeCountry,
        onChangeCurrency,
        isLoading
    } = props

    const {t} = useTranslation('profile')

    const mods: Mods = {
        [cls.editing]: !readonly
    }

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {[cls.loading]: true}, [className])}>
                <Loader/>
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Texts
                    theme={TextsTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar className={cls.img} src={data?.avatar}/>
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastname}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    className={cls.input}
                    onChange={onChangeCity}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Имя пользователя')}
                    className={cls.input}
                    onChange={onChangeUsername}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};

export default ProfileCard;