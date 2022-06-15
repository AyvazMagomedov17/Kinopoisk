import { createEvent, createStore, PageContext, forward, createEffect } from "effector-next";
import axios from 'axios'
const instanse = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})
export const effect = createEffect(async () => {
    const resp = await instanse.get('todos')
    return resp.data
})
export const loadPageEv = createEvent<PageContext>({ name: 'loadPage' })
export const clickEv = createEvent({ name: 'clickOnDick' })
export const $store = createStore([]).on(effect.doneData, (_, data) => _ = data)

loadPageEv.watch(() => {

    effect()
})

forward({
    from: clickEv,
    to: effect
})


