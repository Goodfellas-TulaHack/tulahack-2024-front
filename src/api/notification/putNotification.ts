import { instance } from "@api/api.ts";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IKitchenData } from "@/utils/types/kitchen/IKitchenData.ts";

export type PutNotification = {
  id_user: string;
  id_restoran: string;
  type: string;
  description: string;
};

export const putNotification = async ({
  id_user,
  id_restoran,
  type,
  description,
}: PutNotification) => {
  instance.put<IKitchenData[]>(`/Notification/${id_user}`, {
    id_user,
    id_restoran,
    type,
    description,
  });
};

export const usePutNotification = ({
  id_user,
  id_restoran,
  type,
  description,
}: PutNotification) => {
  return useMutation({
    mutationFn: () =>
      putNotification({ id_user, id_restoran, type, description }),
  });
};
