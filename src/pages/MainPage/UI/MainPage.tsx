import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = React.memo(() => {

    const {t} = useTranslation('main')

    return (
        <div >
            {t('Главная')}
        </div>
    );
});

export default MainPage;