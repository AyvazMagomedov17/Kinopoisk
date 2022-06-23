import { personApi } from './../api/personApi';
import { IPerson } from './../Interfaces/IPerson';
import { attach, combine, createEffect, createEvent, createStore } from "effector-next";
import { IPersons } from '../Interfaces/IPersons';


export const setPersonFx = createEffect(async ({ personId }: { personId: number }) => {
    const data = await personApi.getPerson(personId)
    return data
})
const setPersonsFx = createEffect(async ({ name, page }: { name: string, page: number }) => {
    const data = await personApi.findPersons(name, page)
    return data
})

export const setPersonIdEv = createEvent<number>()
export const setPersonsName = createEvent<string>()
export const setPersonsPage = createEvent<number>()
export const resetPerson = createEvent()
export const $personId = createStore<number>(0)
    .on(setPersonIdEv, (_, payload) => payload)
export const $person = createStore<IPerson | null>(null)
    .on(setPersonFx.doneData, (_, payload) => payload)
    .reset(resetPerson)
export const $personsName = createStore<string>('')
    .on(setPersonsName, (_, payload) => payload)
export const $personsPage = createStore<number>(1)
    .on(setPersonsPage, (_, payload) => payload)
export const $personFilters = combine({ $personsName, $personsPage })
export const $persons = createStore<IPersons | null>(null)
    .on(setPersonsFx.doneData, (_, payload) => payload)


export const getPersonAt = attach({
    effect: setPersonFx,
    source: $personId,
    mapParams: (params, data) => {
        return { personId: data }
    }
})
export const findPersonsAt = attach({
    effect: setPersonsFx,
    source: $personFilters,
    mapParams: (params, data) => {
        return { name: data.$personsName, page: data.$personsPage }
    }
})