import {createAsyncThunk} from "@reduxjs/toolkit";
import {User, userActions} from "entities/User";
import axios from "axios";
import i18n from "shared/config/i18n/i18n";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";

interface LoginByUserNameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUserNameProps>(
    'login/loginByUsername',
    async ( authData, thunlAPI ) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData)

            if( !response.data ) {
                throw new Error()
            }

            // В localStorage хранится авторизован или нет.
            // Поскольку в localstorage хранятся только строки используем JSON.stringify
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunlAPI.dispatch(userActions.setAuthData(response.data))

            return response.data

        } catch (e) {
            console.log(e)
            return thunlAPI.rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'))
        }
    }
)