import React, {ReactNode} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Modal.module.scss'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    onClose: () => void
}

const ANIMATION_DELAY = 300

const Modal = (props: ModalProps) => {

    const { children, className, isOpen, onClose } = props

    const [ isClosing, setIsClosing ] = React.useState(false)

    const timerRef = React.useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = () => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }

    const onContentClick = ( e: React.MouseEvent ) => {
        e.stopPropagation()
    }

    React.useEffect(() => {
        console.log('')

        return () => {
            clearTimeout(timerRef.current)
        }
    }, [])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
           <div className={cls.overlay} onClick={closeHandler}>
               <div className={cls.content} onClick={onContentClick}>
                   {children}
               </div>
           </div>
        </div>
    );
};

export default Modal;