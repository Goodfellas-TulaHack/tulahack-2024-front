import {useStore} from "@/store/store.ts";

export const useRole = ():number | null => {
    const role = useStore(state => state.role)
    return role
}