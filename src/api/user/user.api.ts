import {IUser} from "../../utils/types/user/IUser.ts";
import {instance} from "../api.ts";

export const registerUser = async (data: IUser) => {
    try {

        return await instance.post("User", data)

    }
    catch (e) {
    }
}