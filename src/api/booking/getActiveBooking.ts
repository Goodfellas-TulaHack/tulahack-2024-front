import { useQuery } from "@tanstack/react-query";
import { instance } from "../api";

export type BookingseActive = {
  userId: string;
};

export const getBookingseActive = async ({
  userId,
}: BookingseActive): Promise<any> => {
  const { data } = await instance.get(`/Booking/Active/${userId}`);
  return data;
};

export const uBookingseActive = ({ userId }: BookingseActive) => {
  return useQuery({
    queryKey: ["getBookingseActive", userId],
    queryFn: () => getBookingseActive({ userId }),
  });
};
