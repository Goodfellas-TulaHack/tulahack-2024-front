import {instance} from "@api/api.ts";
import {IMenu} from "@/utils/types/menu/IMenu.ts";

export const getMenu = async (id: string) => {
    return instance.get<IMenu[]>(`/Menu/`+id)
};

export const addMenu = async (Menu: IMenu) => {
    return await instance.post(`/Menu`, Menu)
};