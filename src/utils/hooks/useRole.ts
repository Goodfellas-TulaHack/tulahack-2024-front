import {useStore} from "@/store/store.ts";

export const useRole = ():number | null => {

    return useStore(state => state.role)
}