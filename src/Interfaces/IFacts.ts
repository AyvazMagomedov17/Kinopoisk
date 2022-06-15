import { EFactType } from './enums/EFactType';
export interface IFacts {
    total: number,
    items: IFact[]

}

export interface IFact {
    text: string
    type: EFactType
    spoiler: boolean
}