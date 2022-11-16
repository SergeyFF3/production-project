import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import { useLocation, Navigate } from "react-router-dom";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import React from 'react'

export function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = useSelector(getUserAuthData);
    let location = useLocation();

    if (!auth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
}