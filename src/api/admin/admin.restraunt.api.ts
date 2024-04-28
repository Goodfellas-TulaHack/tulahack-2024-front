
import {instance} from "@api/api.ts";

export const getListAdminRest = async (userId: string) => {
    const { data } = await instance.get<IRestData[]>(`/Restaurant/User/` + userId)
    return data;
};

export const postNewRest = async (data: IRestData) => {
    await instance.post(`/Restaurant`, data)
};

export const putNewRest = async (data: IRestData) => {
    await instance.put(`/Restaurant/`+data.id, data)
};

export const getOneRestoranAdmin = async (id:string) => {
    const { data } = await instance.get<IRestData>(`/Restaurant/${id}`);
    return data;
};
