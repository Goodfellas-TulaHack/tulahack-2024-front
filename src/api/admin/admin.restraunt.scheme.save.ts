import {instance} from "@api/api.ts";

export const postNewTableFn = async (dataTable: ITable) => {
    await instance.post(`/Table`, dataTable)
};