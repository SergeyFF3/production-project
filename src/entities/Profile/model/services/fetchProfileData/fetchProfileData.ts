import {createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";
import {Profile} from "../../types/profile";


export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async ( profileId, {extra, rejectWithValue} ) => {

        if (!profileId) {
            return rejectWithValue('error')
        }

        try {
            const response = await extra.api.get<Profile>(`profile/${profileId}`
            )

            return response.data

        } catch (e) {
            console.log(e)
            return rejectWithValue(i18n.t('Ошибка'))
        }
    }
)















