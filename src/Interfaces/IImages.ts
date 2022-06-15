export interface IImages {
    total: number
    totalPages: number
    items: IImage[]
}
export interface IImage {
    imageUrl: string
    previewUrl: string
}