export interface IUser {
    id: number
    name: string
    email: string
    avatar: string
}

export interface IUserWithToken {
    token: string
    user: IUser
}