import {ProfileSchema, Profile} from "../types/profile";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchProfileData} from "../services/fetchProfileData/fetchProfileData";
import {updateProfileData} from "../../model/services/updateProfileData/updateProfileData";

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
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            }
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.form = state.data
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
                state.readonly = true
            })
            .addCase(updateProfileData.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const {actions: profileActions} = profileSlice
export const {reducer: profileReducer} = profileSlice