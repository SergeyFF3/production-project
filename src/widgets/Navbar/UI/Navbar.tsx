import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import AppLink, {AppLinkTheme} from 'shared/UI/AppLink/AppLink';
import cls from './Navbar.module.scss'
import {useTranslation} from "react-i18next";
import Modal from "shared/UI/Modal/Modal";
import Button, {ThemeButton} from 'shared/UI/Button/Button';
import LoginModal from "features/AuthByUsername/UI/LoginModal/LoginModal";

interface NavbarProps {
    className?: string
}

const Navbar = ({className}: NavbarProps) => {

    const {t} = useTranslation()

    const [ isAuthModal, setIsAuthModal] = React.useState(false)

    const onCloseModal = React.useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = React.useCallback(() => {
        setIsAuthModal(true)
    }, [])

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
        </div>
    );
};

export default Navbar;