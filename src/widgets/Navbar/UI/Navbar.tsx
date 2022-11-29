import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {useTranslation} from "react-i18next";
import Button, {ThemeButton} from 'shared/UI/Button/Button';
import LoginModal from "features/AuthByUsername/UI/LoginModal/LoginModal";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";

interface NavbarProps {
    className?: string
}

const Navbar = React.memo(({className}: NavbarProps) => {

    const {t} = useTranslation()

    const [isAuthModal, setIsAuthModal] = React.useState(false)

    const dispatch = useDispatch()

    const authData = useSelector(getUserAuthData)

    const onCloseModal = React.useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = React.useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = React.useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </header>
        )
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal
              isOpen={isAuthModal}
              onClose={onCloseModal}
            />}
        </header>
    );
});

export default Navbar;