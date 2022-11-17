import React, {ReactNode, useCallback} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import Button, {ThemeButton} from '../Button/Button';
import cls from './Code.module.scss'
import CopyIcon from "shared/assets/icons/Copy.svg";

interface CodeProps {
    className?: string
    text: string
}

const Code = ({className, text}: CodeProps) => {

    const onCopy = useCallback( () => {
        navigator.clipboard.writeText(text)
    }, [text])

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} theme={ThemeButton.CLEAR} className={cls.copyBtn}>
                <CopyIcon/>
            </Button>
            <code>
              {text}
            </code>
        </pre>
    );
};

export default React.memo(Code);