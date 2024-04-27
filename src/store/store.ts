import {create} from "zustand";
import {IUser} from "@/utils/types/user/IUser.ts";

interface UserState{
    id: string,
    login: string,
    firstName: string,
    lastName: string,
    middleName: string,
    phone: string,
    role: number | null,
    isAuth: boolean,
    logining: (user: IUser) => void,
    logout: () => void,
}

export const useStore = create<UserState>()((set) => ({
    id: "",
    login: "",
    firstName: "",
    lastName: "",
    middleName: "",
    phone: "",
    role: null,
    isAuth: false,
    logining: (user) => {
        set(() => ({
            id: user.id,
            login: user.login,
            firstName: user.firstName,
            lastName: user.lastName,
            middleName: user.middleName,
            phone: user.phone,
            role: user.role,
            isAuth: true
        }))
    },
    logout: () => {
        set(() => ({
            id: "",
            login: "",
            firstName: "",
            lastName: "",
            middleName: "",
            phone: "",
            role: null,
            isAuth: false
        }))
    }
}))