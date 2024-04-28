import { useQuery } from "@tanstack/react-query";
import { instance } from "../api";
import { NotificationResponse } from "../types";

export type BookingRestorn = {
  restaurantId: string;
};

export const getBookingRestotan = async ({
  restaurantId,
}: BookingRestorn): Promise<NotificationResponse[]> => {
  const { data } = await instance.get(`/Booking/Restaurant/${restaurantId}`);
  return data;
};

export const useBookingRestorn = ({ restaurantId }: BookingRestorn) => {
  return useQuery({
    queryKey: ["getBookingRestotan", restaurantId],
    queryFn: () => getBookingRestotan({ restaurantId }),
  });
};
