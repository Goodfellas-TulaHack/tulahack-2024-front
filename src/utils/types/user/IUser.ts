export interface IUser {
    id?: string,
    login: string,
    role: number,
    firstName: string,
    lastName: string,
    middleName: string,
    phone: string
}

export interface IUserLogin{
    login: string,
    password: string,
}