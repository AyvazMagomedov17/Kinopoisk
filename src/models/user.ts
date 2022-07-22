import { userApi } from './../api/userApi';
import { IUser } from './../Interfaces/IUser';
import { createEffect, createEvent, createStore } from "effector-next";

export const registrationFx = createEffect(async ({ name, email, password }: { name: string, email: string, password: string }) => {
    const data = await userApi.registration(name, email, password)
    return data
})
export const loginFx = createEffect(async ({ email, password }: { email: string, password: string }) => {
    const data = await userApi.login(email, password)
    return data
})
export const authFx = createEffect(async () => {
    const data = await userApi.auth()
    return data
})
interface Iuser {
    isAuth: boolean,
    user: IUser | null,

    loginError: string,
    registrationError: string,
    authError: string


}
export const resetUserEv = createEvent()
export const toggleIsNeedToBack = createEvent<boolean>()
export const $user = createStore<Iuser | null>(null)
    .on(registrationFx.doneData, (_, payload) => {
        localStorage.setItem('token', payload.token)
        return { isAuth: true, user: payload.user, registrationError: '', loginError: '', authError: '' }
    })
    .on(registrationFx.failData, (_, payload: any) => {
        return { isAuth: false, user: null, registrationError: payload.response.data.message, loginError: '', authError: '' }
    })
    .on(loginFx.doneData, (_, payload) => {
        localStorage.setItem('token', payload.token)
        return { isAuth: true, user: payload.user, registrationError: '', loginError: '', authError: '' }
    })
    .on(loginFx.failData, (_, payload: any) => {
        return { isAuth: false, user: null, loginError: payload.response.data.message, registrationError: '', authError: '' }
    })
    .on(authFx.doneData, (_, payload) => {
        localStorage.setItem('token', payload.token)
        return { isAuth: true, user: payload.user, registrationError: '', loginError: '', authError: '' }
    })
    .on(authFx.failData, (_, payload: any) => {
        localStorage.removeItem('token')
        return { isAuth: false, user: null, authError: payload.response.data.message, loginError: '', registrationError: '' }
    })
    .reset(resetUserEv)

export const $isNeedToBack = createStore(false)
    .on(toggleIsNeedToBack, (_, payload) => payload)
