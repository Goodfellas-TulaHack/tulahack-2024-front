import {useQuery} from "@tanstack/react-query";
import {instance} from "@api/api.ts";

export const getListAdminRest = async (userId: string) => {
    const { data } = await instance.get<IRestData[]>(`/Restraunt/User/` + userId)
    return data;
};

export const useGetListAdminRestoran = (userId: string) => {
    return useQuery({
        queryKey: ["getListRestraunAdmin", userId],
        queryFn: () => getListAdminRest(userId),
    });
};

export const postNewRest = async (dataRest: IRestData) => {
    const {data} = await instance.post(`/Restaurant`, {dataRest})
    return data
};
