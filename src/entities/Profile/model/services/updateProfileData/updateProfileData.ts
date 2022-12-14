import {createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";
import {Profile} from "../../types/profile";
import {getProfileForm} from "../../selectors/getProfileForm/getProfileForm";


export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async ( _, {extra, rejectWithValue, getState} ) => {

        const formData = getProfileForm(getState())

        try {
            const response = await extra.api.put<Profile>(`profile/${formData.id}`, formData)

            if (!response.data) {
                throw new Error()
            }

            return response.data

        } catch (e) {
            console.log(e)
            return rejectWithValue(i18n.t('Ошибка'))
        }
    }
)





