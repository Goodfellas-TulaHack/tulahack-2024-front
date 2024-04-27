interface IRestData {
    id?: string,
    title: string,
    subTitle: string,
    description: string,
    userId: string,
    address: string,
    kitchen: Array<string>,
    menuIds?: Array<string>,
    photos?: Array<string>,
    raiting?: number,
    startWorkTime: string,
    endWorkTime: string,
    schemeId?: string
}