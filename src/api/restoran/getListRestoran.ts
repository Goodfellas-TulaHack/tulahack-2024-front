import { useQuery } from "@tanstack/react-query";
import { instance } from "../api";
import { FilterRestoranResponse } from "../types";

export type FilterRestoran = {
  title: string;
  kitchenIds: string[];
};

export const getListRestoran = async ({
  title,kitchenIds,
}: FilterRestoran): Promise<FilterRestoranResponse[]> => {
  const { data } = await instance.post(`/Restaurant/Search`, {
    title,
    kitchenIds,
  });
  return data;
};

export const useGetListRestoran = ({ title, kitchenIds }: FilterRestoran) => {
  return useQuery({
    queryKey: ["getListRestoran", title, kitchenIds],
    queryFn: () => getListRestoran({ title, kitchenIds }),
  });
};
