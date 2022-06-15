import { EBoxOfficeType } from './enums/EBoxOfficeType';
export interface IBoxOffice {
    total: number
    items: IBoxOfficeItem[]
}

interface IBoxOfficeItem {
    type: EBoxOfficeType
    amount: number
    currencyCode: string
    name: string
    symbol: string


}