import { useQuery } from "@tanstack/react-query";
import { instance } from "../api";
import { FilterRestoranResponse } from "../types";

export type FilterRestoran = {
  title: string;
  kitchen: string;
};

export const getListRestoran = async ({
  title,
  kitchen,
}: FilterRestoran): Promise<FilterRestoranResponse[]> => {
  const { data } = await instance.post(`/Restaurant/Search`, {
    title,
    kitchen,
  });
  return data;
};

export const useGetListRestoran = ({ title, kitchen }: FilterRestoran) => {
  return useQuery({
    queryKey: ["getListRestoran", title, kitchen],
    queryFn: () => getListRestoran({ title, kitchen }),
  });
};
