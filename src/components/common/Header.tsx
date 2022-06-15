import { AppBar, Box, FilledInput, Input, InputLabel, Toolbar } from "@mui/material"
import { Container } from "@mui/system"
import { useStore } from "effector-react"
import { Formik } from "formik"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import logoSvg from '../../assets/img/header/logo.svg'
import { $currentPageOfFilms } from "../../models/currentPageOfFilms"
import s from '../../styles/header.module.css'
type Props = {}

const Header = (props: Props) => {
    const router = useRouter()
    const currentPage = useStore($currentPageOfFilms)
    return (

        <AppBar sx={{ 'backgroundColor': '#3b4859', height: '70px', 'display': 'flex', justifyContent: 'center' }} position="sticky">
            <Container fixed>
                <Toolbar sx={{ 'alignItems': 'center' }} tabIndex={1} >
                    <Link href='/'>
                        <a>
                            <Box sx={{ cursor: 'pointer', 'marginRight': 30 }}>
                                <Image height={40} width={280} src={logoSvg} />
                            </Box>
                        </a>
                    </Link>

                    <Box sx={{ width: '300px', }}>
                        <Formik initialValues={
                            {
                                keyword: ''
                            }
                        } onSubmit={(values) => {
                            router.push(`/movielist/movies?page=${currentPage}&keyword=${values.keyword}`)
                        }}>{({ values, handleChange, handleSubmit }) => (
                            <FilledInput onChange={handleChange} onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    handleSubmit()
                                }
                            }} value={values.keyword} name="keyword" color="success" placeholder="Поиск фильмов" size="medium" fullWidth={true} className={s.input} sx={{ height: '50px', borderRadius: '10px', 'paddingBottom': '10px' }} />
                        )}</Formik>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>


    )
}

export default Header