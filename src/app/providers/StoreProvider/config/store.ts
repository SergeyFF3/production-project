import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {userReducer} from "entities/User";
import {StateSchema} from "./StateSchema";
import {loginReducer} from "features/AuthByUsername";
import {profileReducer} from "entities/Profile";
import {articleDetailsReducer} from "entities/Article";
import {$api} from "shared/api/api";

export function createReduxStore(initialState?: StateSchema) {

    const rootReducers:  ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
        profile: profileReducer,
        articleDetails: articleDetailsReducer
    }

    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                }
            }
        })
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']