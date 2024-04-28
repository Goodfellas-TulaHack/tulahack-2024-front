import { instance } from "@api/api.ts";
import { useQuery } from "@tanstack/react-query";
import { IKitchenData } from "@/utils/types/kitchen/IKitchenData.ts";

export const getListKitchen = async () => {
  const { data } = await instance.get<IKitchenData[]>(`/Kitchen`);
  return data;
};

export const useGetListKitchen = () => {
  return useQuery({
    queryKey: ["kitchen"],
    queryFn: () => getListKitchen(),
  });
};
