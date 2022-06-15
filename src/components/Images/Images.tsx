import { Grid, ImageList, ImageListItem } from '@mui/material'
import { useStore } from 'effector-react'
import { $combinedImagesFilter, resetImagesFiltres, setImagesCurrentPage, setImagesFilter } from '../../models/film'
import FilmIdPathTitle from '../common/FilmIdPathTitle'
import { IFilm } from '../../Interfaces/IFilm'
import { EImageTypeRu } from '../../Interfaces/enums/EImageType'
import ImagesFilter from './ImagesFilter'
import { IImages } from '../../Interfaces/IImages'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ImageItems from './ImageItems'


type Props = {
    film: IFilm
    images: IImages
}

const Images = ({ film, images }: Props) => {

    const filter = useStore($combinedImagesFilter)

    const router = useRouter()
    const page = router.query.page
    const type = router.query.type
    //@ts-ignore
    const title = EImageTypeRu[type] || EImageTypeRu.STILL;





    return (
        <Grid container>
            <Grid item xs={12}>
                <FilmIdPathTitle film={film} descrition={title} />
            </Grid>
            <Grid marginBottom={4} item xs={12}>
                <Grid justifyContent='flex-end' container>
                    <ImagesFilter />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <ImageItems images={images} />
            </Grid>

        </Grid>
    )
}

export default Images