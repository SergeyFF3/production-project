import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './ArticleViewSelector.module.scss'
import {ArticleView} from "entities/Article/model/types/article";
import IconList from 'shared/assets/icons/list.svg'
import IconTile from 'shared/assets/icons/tile.svg'
import Button, {ThemeButton} from 'shared/UI/Button/Button';
import {Icon} from "shared/UI/Icon/Icon";

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.LIST,
        icon: IconList
    },
    {
        view: ArticleView.TILE,
        icon: IconTile
    }
]

const ArticleViewSelector = ({className, onViewClick, view}: ArticleViewSelectorProps) => {

    const {t} = useTranslation()

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView)
    }

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    className={cls.btn}
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        className={classNames(cls.icon, {[cls.selected]: viewType.view !== view})}
                        Svg={viewType.icon}/>
                </Button>
            ))}
        </div>
    );
};

export default React.memo(ArticleViewSelector);