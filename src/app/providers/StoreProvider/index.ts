import { StateSchema } from "./config/StateSchema";
import { createReduxStore, AppDispatch } from "./config/store";
import StoreProvider from "./UI/StoreProvider";

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch
}