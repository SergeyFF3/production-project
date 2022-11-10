import { ProfileSchema } from "entities/Profile";
import {UserSchema} from "entities/User";
import {LoginSchema} from "features/AuthByUsername";

export interface StateSchema {
    user: UserSchema,
    loginForm?: LoginSchema,
    profile?: ProfileSchema
}