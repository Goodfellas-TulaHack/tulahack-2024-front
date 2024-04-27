import {IUser} from "../../utils/types/user/IUser.ts";
import {instance} from "../api.ts";

export const registerFn = async (user: IUser) => {
    return instance.post('User', user)
}

export const loginFn = async (user: IUser) => {
    return instance.post('User', user)
}