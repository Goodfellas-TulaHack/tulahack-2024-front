import {instance} from "@api/api.ts";

export const getAllTableFn = async (restId: string) => {
    return await instance.get('/Table/'+restId)
}

export const postNewTableFn = async (dataTable: ITable) => {
    await instance.post(`/Table`, dataTable)
};

export const putNewTableFn = async (dataTable: ITable) => {
    await instance.put(`/Table/`+dataTable.id, dataTable)
};