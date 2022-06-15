
import { EProfessionKey } from "./enums/EProfessionKey"

export type IStaff = Array<IStaffItem>

export interface IStaffItem {
    staffId: number
    nameRu: string
    nameEn: string
    description: string | null
    posterUrl: string
    professionText: string
    professionKey: EProfessionKey
}