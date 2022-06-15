export interface ISimilars {
    total: number
    items: ISimilarsItem[]
}

export interface ISimilarsItem {
    filmId: number
    nameRu: string | null
    nameEn: string | null
    nameOriginal: string | null
    posterUrl: string
    posterUrlPreview: string
    relationType: string

}