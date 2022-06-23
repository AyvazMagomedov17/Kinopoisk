import { AppProps } from "next/app";
import '../src/styles/global.css'

import { withHydrate } from "effector-next";
import { useEffect, useState } from "react";
import { getGenrecCountriesListEf } from "../src/models/genresCountriesList";
import { useRouter } from "next/router";
import Preloader from "../src/components/common/Preloader";
import ProgressBar from "../src/components/common/ProgressBar";
import { Grid } from "@mui/material";

const enhance = withHydrate();
function MyApp({ Component, pageProps }: AppProps) {
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

    useEffect(() => {
        getGenrecCountriesListEf()
    })

    return <>

        {loading && <ProgressBar />}
        <Component {...pageProps} />

    </>

}

export default enhance(MyApp)
