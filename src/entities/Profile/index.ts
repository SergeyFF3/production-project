import ProfileCard from "./UI/ProfileCard/ProfileCard";

export {
    Profile,
    ProfileSchema
} from './model/types/profile';

export {
    profileActions,
    profileReducer
} from './model/slice/profileSlice';

export {
    fetchProfileData
} from './model/services/fetchProfileData/fetchProfileData';

export {
    updateProfileData
} from './model/services/updateProfileData/updateProfileData';

export {
    ProfileCard
}

export {getProfileIsLoading} from './model/selectors/getProfileIsLoading/getProfileIsLoading'
export {getProfileData} from './model/selectors/getProfileData/getProfileData'
export {getProfileError} from './model/selectors/getProfileError/getProfileError'
export {getProfileForm} from './model/selectors/getProfileForm/getProfileForm'
export {getProfileReadonly} from './model/selectors/getProfileReadonly/getProfileReadonly'