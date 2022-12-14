import React, {MutableRefObject, ReactNode, useCallback} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Modal.module.scss'
import Portal from "shared/UI/Portal/Portal";

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    onClose: () => void
}

const ANIMATION_DELAY = 300

const Modal = (props: ModalProps) => {

    const {children, className, isOpen, onClose} = props

    const [isClosing, setIsClosing] = React.useState(false)

    const timerRef = React.useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const onKeyDown = useCallback((e: KeyboardEvent) => {

        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    React.useEffect(() => {

        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;