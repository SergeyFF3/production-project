import React, {ReactNode} from 'react';
import {Provider} from "react-redux";
import {createReduxStore} from "app/providers/StoreProvider/config/store";
import { StateSchema } from '../config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

const StoreProvider = (props: StoreProviderProps) => {

    const { children, initialState} = props

    const navigate = useNavigate()

    const store = createReduxStore(
        initialState as StateSchema,
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;