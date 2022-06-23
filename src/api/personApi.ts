import { IPersons } from './../Interfaces/IPersons';
import { IPerson } from './../Interfaces/IPerson';
import { instanse } from './api';
export const personApi = {
    getPerson: async (personId: number) => {
        const resp = await instanse.get(`api/v1/staff/${personId}`)
        const data: IPerson = resp.data
        return data
    },
    findPersons: async (name: string, page: number) => {
        const searchName = encodeURI(name)
        const resp = await instanse.get(`api/v1/persons?name=${searchName}&page=${page}`)
        const data: IPersons = resp.data
        return data
    }

}