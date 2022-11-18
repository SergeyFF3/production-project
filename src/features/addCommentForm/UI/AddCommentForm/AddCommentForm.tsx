import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './AddCommentForm.module.scss'
import {useTranslation} from "react-i18next";
import Input from 'shared/UI/Input/Input';
import Button, {ThemeButton} from 'shared/UI/Button/Button';
import {useSelector} from "react-redux";
import {getAddCommentFormError, getAddCommentFormText} from "../../model/selectors/addCommentFormSelectors";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {addCommentFormActions} from '../../model/slices/addCommentFormSlice'

interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const AddCommentForm = ({className, onSendComment}: AddCommentFormProps) => {

    const {t} = useTranslation()

    const text = useSelector(getAddCommentFormText)

    const error = useSelector(getAddCommentFormError)

    const dispatch = useAppDispatch()

    const onCommentTextChange = React.useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSendHandler = React.useCallback(() => {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [onSendComment, onCommentTextChange, text])

    return (
        <div className={classNames(cls.AddCommentForm, {}, [className])}>
            <Input
                className={cls.input}
                placeholder={t('Введите текст комментария')}
                value={text}
                onChange={onCommentTextChange}
            />
            <Button
                onClick={onSendHandler}
                theme={ThemeButton.OUTLINE}
            >
                {t('Отправить')}
            </Button>
        </div>
    );
};

export default React.memo(AddCommentForm);