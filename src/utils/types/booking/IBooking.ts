export interface IBooking {
    userId: string,
    restrauntId: string,
    tabelId: string,
    date: string,
    startTime: string,
    endTime: string,
    personNumber: number,
    status: number
}

export interface IBookingStatus {
    tablesId: string[],
    date: string,
    time: string,
}