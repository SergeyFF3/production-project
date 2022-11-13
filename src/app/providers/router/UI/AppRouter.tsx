import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import PageLoader from "widgets/PageLoader/PageLoader";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";

const AppRouter = () => {

    const isAuth = useSelector(getUserAuthData)

    const routes = React.useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            if (route.authOnly && !isAuth) {
                return false
            }

            return true
        })
    }, [isAuth])

    return (
        <Routes>
            {routes.map(({element, path}) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader/>}>
                            <div className='page-wrapper'>
                                {element}
                            </div>
                        </Suspense>)}
                />
            ))}
        </Routes>
    );
};

export default React.memo(AppRouter);