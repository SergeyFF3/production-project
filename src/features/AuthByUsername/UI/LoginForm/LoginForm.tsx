import React, {memo, useCallback} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from '../../model/slice/loginSlice';
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import Input from "shared/UI/Input/Input";
import Button, {ThemeButton} from "shared/UI/Button/Button";
import Texts, {TextsTheme} from "shared/UI/Text/Texts";

interface LoginFormProps {
    className?: string
}

const LoginForm = memo(({className}: LoginFormProps) => {

    const {t} = useTranslation()

    const dispatch = useDispatch()

    const {username, password, error, isLoading} = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({password, username}))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Texts title={t('Форма авторизации')}/>
            {error && <Texts text={error} theme={TextsTheme.ERROR}/>}
            <Input
                type='text'
                placeholder={t('Введите логин')}
                onChange={onChangeUsername}
                value={username}
                className={cls.input}
            />
            <Input
                type='text'
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
                className={cls.input}
            />
            <Button
                theme={ThemeButton.OUTLINE}
                onClick={onLoginClick}
                className={cls.loginBtn}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

export default LoginForm;