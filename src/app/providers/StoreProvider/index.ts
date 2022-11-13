import {StateSchema, ThunkConfig} from "./config/StateSchema";
import {AppDispatch, createReduxStore} from "./config/store";
import StoreProvider from "./UI/StoreProvider";

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
    ThunkConfig
}