import { useQuery } from "@tanstack/react-query";
import { instance } from "../api";
import { NotificationResponse } from "../types";

export type NotificationRestoran = {
  restaurantId: string;
};

export const getNotification = async ({
  restaurantId,
}: NotificationRestoran): Promise<NotificationResponse[]> => {
  const { data } = await instance.get(`/Notification/${restaurantId}`);
  return data;
};

export const useNotification = ({ restaurantId }: NotificationRestoran) => {
  return useQuery({
    queryKey: ["getNotification", restaurantId],
    queryFn: () => getNotification({ restaurantId }),
  });
};
