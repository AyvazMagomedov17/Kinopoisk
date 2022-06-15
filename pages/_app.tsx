import { AppProps } from "next/app";
import '../src/styles/global.css'

import { withHydrate } from "effector-next";
import { useEffect } from "react";
import { getGenrecCountriesListEf } from "../src/models/genresCountriesList";

const enhance = withHydrate();
function MyApp({ Component, pageProps }: AppProps) {

    useEffect(() => {
        getGenrecCountriesListEf()
    })
    return <Component {...pageProps} />
}

export default enhance(MyApp)
