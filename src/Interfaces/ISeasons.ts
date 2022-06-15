export interface ISeasons {
    total: number,
    items: [
        number: number,
        episodes: IEpisodes[]


    ]

}
interface IEpisodes {
    seasonNumber: number
    episodeNumber: number
    nameRu: string | null
    nameEn: string | null
    synopsis: string | null
    releaseDate: string | null
}