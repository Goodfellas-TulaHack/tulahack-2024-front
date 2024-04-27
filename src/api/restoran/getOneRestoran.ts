import { useQuery } from "@tanstack/react-query";
import { instance } from "../api";
import { FilterRestoranResponse } from "../types";

export type OneRestoran = {
  id: string;
};

export const getOneRestoran = async ({
  id,
}: OneRestoran): Promise<FilterRestoranResponse> => {
  const { data } = await instance.get(`/Restaurant/${id}`);
  return data;
};

export const useGetOneRestoran = ({ id }: OneRestoran) => {
  return useQuery({
    queryKey: ["getListRestoran", id],
    queryFn: () => getOneRestoran({ id }),
  });
};
