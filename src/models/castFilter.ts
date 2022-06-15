import { EProfessionKey } from './../Interfaces/enums/EProfessionKey';
import { createEvent, createStore } from "effector-next";


export const setCastFilterEv = createEvent<EProfessionKey>()

export const setIsOnCastPage = createEvent<boolean>()
export const $castFilter = createStore<EProfessionKey>(EProfessionKey.UNKNOWN)
    .on(setCastFilterEv, (_, payload) => payload)

