import {useStore} from "@/store/store.ts";

export const useUserId = ():string => {

    return useStore(state => state.id)
}