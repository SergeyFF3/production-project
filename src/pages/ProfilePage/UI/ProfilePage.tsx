import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfilePage.module.scss'
import {useTranslation} from "react-i18next";

interface ProfilePageProps {
    className?: string
}

const ProfilePage = React.memo(({className}: ProfilePageProps) => {

    const {t} = useTranslation()

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>

        </div>
    );
});

export default ProfilePage;