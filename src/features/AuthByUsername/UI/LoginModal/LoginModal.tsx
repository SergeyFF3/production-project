import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginModal.module.scss'
import LoginForm from "../LoginForm/LoginForm";
import Modal from "shared/UI/Modal/Modal";


interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

const LoginModal = ({className, isOpen, onClose}: LoginModalProps) => {

    return (
        <Modal
            onClose={onClose}
               isOpen={isOpen}
               className={classNames(cls.LoginModal, {}, [className])}
        >
                <LoginForm onSuccess={onClose}/>
        </Modal>
    );
};

export default LoginModal;