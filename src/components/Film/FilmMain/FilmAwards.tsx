import { Backdrop, Box, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { IAward, IAwards } from "../../../Interfaces/IAwards"
import Modal from '@mui/material/Modal';
import Link from "next/link";
import { useRouter } from "next/router";
import FilmMainLink from "./FilmMainLink";


type Props = {
    awards: IAwards
}
type PopupAwardItemsType = {
    awards: Array<IAward>
    title: string
    color: string
}
const PopupAwardItem = ({ awards, color, title }: PopupAwardItemsType) => {
    const router = useRouter()
    return <Box paddingBottom={2} paddingTop={2}>
        <Grid color={color} container>
            <Grid item xs={12}>
                <Typography marginBottom={2} fontWeight={900} color='black' fontSize={20} display='block' >{title}</Typography>
            </Grid>

            <Grid item xs={3}><Typography fontWeight={600} color='rgba(44, 4, 108, 1)' fontSize={15}>{awards[0].year}</Typography></Grid>
            <Grid item xs={9}>{awards.map(item => {
                return <>
                    <Typography fontSize={17}>{item.nominationName}</Typography>
                    <FilmMainLink>
                        {item.persons[0] ? <Link href={'/persons/' + item.persons[0].kinopoiskId}>
                            <Typography fontSize={12}><>({item.persons[0].nameRu || item.persons[0].nameEn})</></Typography>
                        </Link> : null}


                    </FilmMainLink>

                </>
            })}</Grid>
        </Grid>
    </Box>
}
const FilmAwards = ({ awards }: Props) => {
    const router = useRouter()
    const [isOscarWin, setIsOscarWin] = useState(false)
    const [isOscarNomination, setisOscarNomination] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [awardImg, setAwardImgPath] = useState<undefined | string>(isOscarWin ? 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/09035193-2458-4de7-a7df-ad8f85b73798/orig' : isOscarNomination ? 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/931b548b-45a0-45ad-8127-148c423f850a/orig' : undefined)

    const oscarsWin: IAward[] = []
    const oscarsNomination: IAward[] = []
    useEffect(() => {
        setIsOscarWin(false)
    }, [router.query.filmId])
    useEffect(() => {
        setAwardImgPath(isOscarWin ? 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/09035193-2458-4de7-a7df-ad8f85b73798/orig' : isOscarNomination ? 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/931b548b-45a0-45ad-8127-148c423f850a/orig' : undefined)
    }, [isOscarWin, isOscarNomination])
    if (awards.total) {

        awards.items.forEach(item => {
            if (item.name === 'Оскар') {
                if (item.win) {
                    oscarsWin.push(item)
                } else {
                    oscarsNomination.push(item)
                }

            }
        })
    }
    useEffect(() => {
        if (oscarsWin.length) {
            setIsOscarWin(true)
        }
        if (!oscarsWin.length && oscarsNomination.length) {
            setisOscarNomination(true)
        }
    }, [oscarsWin, oscarsNomination])

    const handleOpen = () => setIsModalOpen(true)
    const handleClose = () => setIsModalOpen(false)
    const modalStyle = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: 700,
        bgcolor: 'background.paper',

        boxShadow: 24,
        p: 4,
        borderRadius: '20px',
        maxHeight: '600px',
        overflow: 'auto'


    };
    if (isOscarWin || isOscarNomination) {
        return (
            <>
                <Box sx={{}}>
                    <Typography marginBottom={4} paddingTop={5} variant="h5">Награды</Typography>
                    <Box onClick={handleOpen} sx={{ 'cursor': 'pointer', 'maxWidth': '100px' }}>
                        <img style={{ 'textAlign': 'center', 'display': 'inline', 'maxWidth': '50px', 'cursor': 'pointer', 'marginRight': '10px' }} src={awardImg} alt="" />
                        <Box sx={{ 'marginTop': '-30px' }} display='inline-block'>
                            <Box sx={{ 'width': '30px', height: '30px', 'backgroundColor': 'rgba(130, 61, 61, 0.8)', 'borderRadius': '50%', 'justifyContent': 'center', 'alignItems': 'center' }} marginTop='-20px' display='flex'>{oscarsWin.length + oscarsNomination.length}
                            </Box>
                        </Box>
                    </Box>




                </Box>
                <Modal aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description" closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 1000,
                    }} open={isModalOpen} onClose={handleClose}>
                    <Box sx={modalStyle}>
                        <Box sx={{ 'display': 'flex', 'justifyContent': 'center' }}>
                            <Box >
                                <Typography sx={{ 'cursor': 'pointer' }} variant='h5'>Оскар</Typography>
                                <FilmMainLink color="rgba(7, 7, 7, 1)">
                                    <Link href={router.asPath + '/' + 'awards'}>
                                        <Typography display='block' sx={{ cursor: 'pointer', 'justifySelf': 'flex-start', 'position': 'absolute', 'right': '20px', 'top': '10px' }}>Показать все награды...</Typography>
                                    </Link>
                                </FilmMainLink>

                            </Box>


                        </Box>
                        <Box >
                            {isOscarWin &&
                                <PopupAwardItem title="Победитель" awards={oscarsWin} color='rgba(171, 89, 5, 1)' />
                            }
                            {oscarsNomination.length ? <PopupAwardItem title="Номинация" color="black" awards={oscarsNomination} /> : null}
                        </Box>

                    </Box>
                </Modal>


            </>
        )
    }
    return <></>

}

export default FilmAwards