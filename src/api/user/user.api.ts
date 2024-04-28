import {IUser, IUserLogin} from "../../utils/types/user/IUser.ts";
import {instance} from "../api.ts";

export const registerFn = async (user: IUser) => {
    return instance.post('User', user)
}

export const loginFn = async (user: IUserLogin) => {
    return instance.post('User/Login', user)
}

export const authFn = async () => {
    const {data} = await instance.post<IUser>('User/Auth')
    return data
}