import React, {ReactNode} from 'react';
import {Provider} from "react-redux";
import {createReduxStore} from "app/providers/StoreProvider/config/store";
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode
    initialstate?: StateSchema
}

const StoreProvider = (props: StoreProviderProps) => {

    const { children, initialstate} = props

    const store = createReduxStore(initialstate)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;