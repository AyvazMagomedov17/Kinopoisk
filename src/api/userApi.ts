import { IUserWithToken } from './../Interfaces/IUser';
import { userInstanse } from './instanse';
export const userApi = {
    registration: async (name: string, email: string, password: string) => {
        const user = await userInstanse.post('user/registration', { name, email, password })
        const data: IUserWithToken = user.data
        return data
    },
    login: async (email: string, password: string) => {
        const user = await userInstanse.post('user/login', { email, password })
        const data: IUserWithToken = user.data
        return data
    },
    auth: async () => {
        const user = await userInstanse.get('user/auth')
        const data: IUserWithToken = user.data
        return data
    }
}