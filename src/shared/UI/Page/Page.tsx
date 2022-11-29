import React, {MutableRefObject, ReactNode} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Page.module.scss'
import {useInfiniteScroll} from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

const Page = ({className, children, onScrollEnd}: PageProps) => {

    const wrapperRef = React.useRef() as MutableRefObject<HTMLDivElement>

    const triggerRef = React.useRef() as MutableRefObject<HTMLDivElement>

    useInfiniteScroll( {
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            <div ref={triggerRef}/>
        </section>
    );
};

export default React.memo(Page);