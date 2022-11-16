import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, UserSchema} from "../types/user";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";

const initialState: UserSchema = {
    _inited: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if (user) {
                // Если для localStorage компилировали в строку, то parse значит переопределить обратно в JS объект
                state.authData = JSON.parse(user)
            }
            state._inited = true
        },
        logout: (state) => {
            state.authData = undefined
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        }
    }
})

export const {actions: userActions} = userSlice
export const {reducer: userReducer} = userSlice