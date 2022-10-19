import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "shared/UI/ThemeSwitcher";

interface SidebarProps {
    className?: string
}

const Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = React.useState(false)

    const toggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={toggle}>TOGGLE</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

export default Sidebar;