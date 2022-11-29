import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "shared/UI/ThemeSwitcher";
import LangSwitcher from "shared/UI/LangSwitcher/UI/LangSwitcher";
import Button, {ButtonSize, ThemeButton} from 'shared/UI/Button/Button';
import SidebarItem from "../SidebarItem/SidebarItem";
import {useSelector} from "react-redux";
import {getSidebarItems} from "../../model/selectors/getSidebarItems";

interface SidebarProps {
    className?: string
}

const Sidebar = React.memo(({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = React.useState(false)

    const sidebarItemsList = useSelector(getSidebarItems)

    const toggle = () => {
        setCollapsed(!collapsed)
    }

    const itemsList = React.useMemo( () => sidebarItemsList.map((item) => (
        <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
        />
    )),[collapsed, sidebarItemsList])

    return (
        <menu className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                className={cls.collapsedBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                onClick={toggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
                <div className={cls.items}>
                    {itemsList}
                </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </menu>
    );
});

export default React.memo(Sidebar);