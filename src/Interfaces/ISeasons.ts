export interface ISeasons {
    total: number,
    items: IEpisode[]

}
export interface IEpisode {
    number: number
    episodes: IOneEpisode[]

}
export interface IOneEpisode {
    seasonNumber: number
    episodeNumber: number
    nameRu: string | null
    nameEn: string | null
    synopsis: string | null
    releaseDate: string | null
}