import React, {useCallback} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfilePage.module.scss'
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading, getProfileReadonly,
    profileActions,
    ProfileCard,
} from "entities/Profile";
import {useSelector} from "react-redux";
import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader";
import {Currency} from 'entities/Currency';
import {Country} from "entities/Country/model/types/Country";

interface ProfilePageProps {
    className?: string
}

const ProfilePage = React.memo(({className}: ProfilePageProps) => {

    const {t} = useTranslation()

    const dispatch = useAppDispatch()

    const formData = useSelector(getProfileForm)

    const error = useSelector(getProfileError)

    const isLoading = useSelector(getProfileIsLoading)

    const readonly = useSelector(getProfileReadonly)

    React.useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    const onChangeFirstname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({first: value || ''}))
    }, [dispatch])

    const onChangeLastname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({lastname: value || ''}))
    }, [dispatch])

    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({age: Number(value || 0)}))
    }, [dispatch])

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({city: value || ''}))
    }, [dispatch])

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({avatar: value || ''}))
    }, [dispatch])

    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({username: value || ''}))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({currency}))
    }, [dispatch])

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({country}))
    }, [dispatch])

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <ProfilePageHeader/>
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeAvatar={onChangeAvatar}
                onChangeUsername={onChangeUsername}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </div>
    );
});

export default ProfilePage;