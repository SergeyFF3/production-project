import React, {Suspense} from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {classNames} from "shared/lib/classNames/classNames";
import {useDispatch, useSelector} from "react-redux";
import {getUserInited, userActions} from "entities/User";

const App = () => {

    const {theme} = useTheme()

    const dispatch = useDispatch()

    const inited = useSelector(getUserInited)

    React.useEffect( () => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    {inited && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    );
};

export default App;