import {instance} from "@api/api.ts";
import {IBooking, IBookingStatus} from "@/utils/types/booking/IBooking.ts";

export const getListBooking = async (id: string) => {
    const { data } = await instance.get<IBookingStatus[]>(`/Restraunt/${id}/Table`);
    return data;
};

export const addBooking = async (data: IBooking) => {
    return await instance.post<IBooking>(`/Booking`, data);
}