import React from 'react';
import cls from './SidebarItem.module.scss'
import {useTranslation} from "react-i18next";
import AppLink, {AppLinkTheme} from "shared/UI/AppLink/AppLink";
import {SidebarItemType} from "widgets/Sidebar/model/items";
import {classNames} from "shared/lib/classNames/classNames";

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

const SidebarItem = ({collapsed, item}: SidebarItemProps) => {

    const {t} = useTranslation()

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, {[cls.collapsed]: collapsed})}
            to={item.path}
        >
            <item.Icon className={cls.icon}/>
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
};

export default SidebarItem;