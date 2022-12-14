import React, {ReactNode} from 'react';
import {Provider} from "react-redux";
import {createReduxStore} from "app/providers/StoreProvider/config/store";
import {StateSchema} from '../config/StateSchema';
import {DeepPartial} from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

const StoreProvider = (props: StoreProviderProps) => {

    const { children, initialState} = props

    const store = createReduxStore(
        initialState as StateSchema,
    )

    console.log('RENDER')

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;