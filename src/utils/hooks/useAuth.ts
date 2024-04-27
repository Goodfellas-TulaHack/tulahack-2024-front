import {useStore} from "@/store/store.ts";

export const useAuth = ():boolean => {
    const auth = useStore(state => state.isAuth)
    return auth
}