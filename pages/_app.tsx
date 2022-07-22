import '../src/styles/global.css'

import { withHydrate } from "effector-next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProgressBar from "../src/components/common/ProgressBar";
import { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material';
import { authFx } from '../src/models/user';

const enhance = withHydrate();
const theme = createTheme({
    typography: {
        fontFamily: [
            'Nunito Sans'
        ].join(','),
    },
});
function MyApp({ Component, pageProps }: AppProps) {
    const auth = async () => {
        authFx()
    }
    useEffect(() => {
        auth()
    }, [])
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    useEffect(() => {
        // Обработка начала загрузки
        router.events.on("routeChangeStart", () => {
            setLoading(true);
        });
        // Обработка окончания загрузки
        router.events.on("routeChangeComplete", () => {
            setLoading(false);
        });
    }, []);



    return <>
        <ThemeProvider theme={theme}>
            {loading && <ProgressBar />}
            <Component  {...pageProps} />
        </ThemeProvider>


    </>

}


export default enhance(MyApp)
