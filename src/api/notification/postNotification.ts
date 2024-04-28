import { instance } from "@api/api.ts";
import { useMutation } from "@tanstack/react-query";
import { IKitchenData } from "@/utils/types/kitchen/IKitchenData.ts";

export type PutNotification = {
  userId: string;
  restaurantId: string;
  type: string;
  description: string;
};

export const postNotification = async ({
  userId,
  restaurantId,
  type,
  description,
}: PutNotification) => {
  instance.post<IKitchenData[]>(`/Notification`, {
    userId,
    restaurantId,
    type,
    description,
  });
};

export const usePutNotification = ({
  userId,
  restaurantId,
  type,
  description,
}: PutNotification) => {
  return useMutation({
    mutationFn: () =>
      postNotification({ userId, restaurantId, type, description }),
  });
};
