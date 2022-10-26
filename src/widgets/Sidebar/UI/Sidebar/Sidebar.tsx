import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "shared/UI/ThemeSwitcher";
import LangSwitcher from "shared/UI/LangSwitcher/UI/LangSwitcher";
import AppLink, {AppLinkTheme} from "shared/UI/AppLink/AppLink";
import {useTranslation} from "react-i18next";
import Button, {ThemeButton} from 'shared/UI/Button/Button';
import Arrow from 'shared/assets/icons/arrow.svg'

interface SidebarProps {
    className?: string
}

const Sidebar = ({className}: SidebarProps) => {

    const {t} = useTranslation()

    const [collapsed, setCollapsed] = React.useState(false)

    const toggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                className={cls.toggle}
                theme={ThemeButton.CLEAR}
                onClick={toggle}
            >
                {collapsed ? <Arrow className={cls.rightArrow}/> : <Arrow className={cls.leftArrow}/>}
            </Button>
            <div>
                <div className={cls.links}>
                    <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to={'/'}>
                        {t('Главная')}
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                        {t('О сайте')}
                    </AppLink>
                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};

export default Sidebar;