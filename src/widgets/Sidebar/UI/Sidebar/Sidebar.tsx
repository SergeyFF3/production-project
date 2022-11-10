import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "shared/UI/ThemeSwitcher";
import LangSwitcher from "shared/UI/LangSwitcher/UI/LangSwitcher";
import Button, {ButtonSize, ThemeButton} from 'shared/UI/Button/Button';
import {SidebarItemList} from "../../model/items";
import SidebarItem from "../SidebarItem/SidebarItem";

interface SidebarProps {
    className?: string
}

const Sidebar = React.memo(({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = React.useState(false)

    const toggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                className={cls.collapsedBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                onClick={toggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
                <div className={cls.items}>
                    {SidebarItemList.map((item) => (
                        <SidebarItem
                            key={item.path}
                            item={item}
                            collapsed={collapsed}
                        />
                    ))}
                </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
});

export default Sidebar;