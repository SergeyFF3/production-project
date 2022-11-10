import { ProfileSchema } from "../types/profile";
import {createSlice} from "@reduxjs/toolkit";

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice