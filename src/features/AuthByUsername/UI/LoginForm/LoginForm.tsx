import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import {useTranslation} from "react-i18next";
import Button from "shared/UI/Button/Button";

interface LoginFormProps {
    className?: string
}

const LoginForm = ({className}: LoginFormProps) => {

    const {t} = useTranslation()

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <input type='text'/>
            <input type='text'/>
            <Button>{t('Войти')}</Button>
        </div>
    );
};

export default LoginForm;