import {createAsyncThunk} from "@reduxjs/toolkit";
import {User, userActions} from "entities/User";
import i18n from "shared/config/i18n/i18n";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";
import {ThunkConfig} from "app/providers/StoreProvider/config/StateSchema";

interface LoginByUserNameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async ( authData, {extra, rejectWithValue, dispatch} ) => {
        try {
            const response = await extra.api.post<User>('login', authData)

            if( !response.data ) {
                throw new Error()
            }

            // В localStorage хранится авторизован или нет.
            // Поскольку в localstorage хранятся только строки используем JSON.stringify
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))

            return response.data

        } catch (e) {
            console.log(e)
            return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'))
        }
    }
)