import { Grid, ImageList, ImageListItem } from '@mui/material'
import { useStore } from 'effector-react'
import { $combinedImagesFilter, resetImagesFiltres, setImagesCurrentPage, setImagesFilter } from '../../models/film'
import FilmIdPathTitle from '../common/FilmIdPathTitle'
import { IFilm } from '../../Interfaces/IFilm'
import { EImageType, EImageTypeRu } from '../../Interfaces/enums/EImageType'
import ImagesFilter from './ImagesFilter'
import { IImages } from '../../Interfaces/IImages'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ImageItems from './ImageItems'
import Paginator from '../common/Paginator'
import NoItems from '../common/NoItems'


type Props = {
    film: IFilm
    images: IImages
}

const Images = ({ film, images }: Props) => {

    const router = useRouter()
    const type = router.query.type
    const queryPage = router.query.page
    const page = Number(router.query.page) || 1
    //@ts-ignore
    const title = EImageTypeRu[type] || EImageTypeRu.STILL;

    const setCurrentPage = (payload: number) => {
        router.replace(page && type ? router.asPath.replace(`page=${queryPage}&type=${type}`, `page=${payload}&type=${type}`) : router.asPath + `?page=${payload}&type=${EImageType.STILL}`)
    }



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
            {images.total === 0 ? <NoItems text='Изображений' /> : <>
                <Grid marginBottom={3} item xs={12}>
                    <Grid justifyContent='center' container>
                        <Paginator pagesCount={images.totalPages} setCurrentPage={setCurrentPage} currentPage={page} />
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <ImageItems images={images} />
                </Grid></>}


        </Grid>
    )
}

export default Images