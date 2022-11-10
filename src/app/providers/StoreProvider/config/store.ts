import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import { userReducer } from "entities/User";
import {StateSchema} from "./StateSchema";
import {loginReducer} from "features/AuthByUsername";
import { profileReducer } from "entities/Profile";

export function createReduxStore(initialState?: StateSchema) {

    const rootReducers:  ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
        profile: profileReducer
    };


    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']