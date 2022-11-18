import React, {useCallback} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfilePageHeader.module.scss'
import {useTranslation} from "react-i18next";
import Texts from "shared/UI/Text/Texts";
import Button, {ThemeButton} from 'shared/UI/Button/Button';
import {useSelector} from "react-redux";
import {getProfileData, getProfileReadonly, profileActions, updateProfileData} from "entities/Profile";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getUserAuthData} from "entities/User";

interface ProfilePageHeaderProps {
    className?: string
}

const ProfilePageHeader = ({className}: ProfilePageHeaderProps) => {

    const {t} = useTranslation('profile')

    const dispatch = useAppDispatch()

    const readonly = useSelector(getProfileReadonly)

    const authData = useSelector(getUserAuthData)

    const profileData = useSelector(getProfileData)

    const canEdit = authData?.id === profileData?.id

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Texts title={t('Профиль')}/>
            {canEdit && (
                <div className={cls.btnWrapper}>
                    {readonly
                        ? (
                            <Button
                                className={cls.editBtn}
                                theme={ThemeButton.OUTLINE}
                                onClick={onEdit}
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <>
                                <Button
                                    className={cls.editBtn}
                                    theme={ThemeButton.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    className={cls.saveBtn}
                                    theme={ThemeButton.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>
                        )
                    }
                </div>
            )}
        </div>
    );
};

export default ProfilePageHeader;