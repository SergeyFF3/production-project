import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import AppLink, {AppLinkTheme} from 'shared/UI/AppLink/AppLink';
import cls from './Navbar.module.scss'
import {useTranslation} from "react-i18next";
import Modal from "shared/UI/Modal/Modal";
import Button, {ThemeButton} from 'shared/UI/Button/Button';

interface NavbarProps {
    className?: string
}

const Navbar = ({className}: NavbarProps) => {

    const {t} = useTranslation()

    const [ isAuthModal, setIsAuthModal] = React.useState(false)

    const onToggleModal = React.useCallback(() => {
        setIsAuthModal(!isAuthModal)
    }, [])

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}
            >
                1234
            </Modal>
        </div>
    );
};

export default Navbar;