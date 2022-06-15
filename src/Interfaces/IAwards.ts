export interface IAwards {
    total: number,
    items: IAward[]
}

export interface IAward {
    name: string | null
    win: boolean
    imageUrl: string | null
    nominationName: string | null
    year: number
    persons: IAwardPerson[]
}
export interface IAwardPerson {
    kinopoiskId: number | null
    webUrl: string | null
    nameRu: string
    nameEn: string
    sex: string
    posterUrl: string
    growth: number
    birthday: string
    death: string
    age: number
    birthplace: string
    deathplace: string
    profession: string
}