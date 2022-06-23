import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Categories from "../../src/components/Categories/Categories"
import Page404 from "../../src/components/common/Page404"
import TitleLayout from "../../src/layouts/TitleLayout"
import { COUNTRIES, GENRES, TOPS } from "../../src/paths/filmsPahts"

type Props = {}

const Series = (props: Props) => {
    const src = useRouter().query.src



    if (src && src !== GENRES && src !== COUNTRIES) {
        return <TitleLayout title='404 Страница не найдена'>
            <Page404 />
        </TitleLayout>
    }
    return (
        <TitleLayout title="Сериалы">
            <Categories title="Сериалы" baseUrl="/series" />
        </TitleLayout>

    )
}

export default Series