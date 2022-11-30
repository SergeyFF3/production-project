import React, {MutableRefObject, ReactNode, UIEvent} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Page.module.scss'
import {useInfiniteScroll} from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getScrollSavePath, scrollSaveActions} from 'features/ScrollSave'
import { useLocation } from 'react-router-dom';
import {useSelector} from "react-redux";
import {StateSchema} from "app/providers/StoreProvider";
import {useThrottle} from "shared/lib/hooks/useThrottle/useThrottle";

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

const Page = ({className, children, onScrollEnd}: PageProps) => {

    const dispatch = useAppDispatch()

    const {pathname} = useLocation()

    const scrollPosition = useSelector( (state: StateSchema) => getScrollSavePath(state, pathname))

    const wrapperRef = React.useRef() as MutableRefObject<HTMLDivElement>

    const triggerRef = React.useRef() as MutableRefObject<HTMLDivElement>

    useInfiniteScroll( {
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    React.useEffect( () => {
        wrapperRef.current.scrollTop = scrollPosition
    }, [])

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname
        }))
    }, 500)

    return (
        <section
            ref={wrapperRef}
            onScroll={onScroll}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            <div ref={triggerRef}/>
        </section>
    );
};

export default React.memo(Page);