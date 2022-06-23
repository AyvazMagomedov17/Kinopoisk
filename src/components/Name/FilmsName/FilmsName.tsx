import { Grid, Tab, Tabs } from "@mui/material"
import { useStore } from "effector-react"
import { useEffect, useState } from "react"
import { EExtendedProffesionKey } from "../../../Interfaces/enums/EProfessionKey"
import { ESex } from "../../../Interfaces/enums/ESex"
import { IPersonFilm } from "../../../Interfaces/IPerson"
import { $tabs, changeFilmsNameTabsEv } from "../../../models/tabs"
import TabsName from "../TabsName"
import FilmNameItem from "./FilmNameItem"

type Props = {
    films: IPersonFilm[] | undefined
    sex: ESex | undefined | null
}

const FilmsName = ({ films, sex }: Props) => {
    const tabs = useStore($tabs).filmsName
    const [items, setItems] = useState(films)
    const filmsList = items?.map(film => <FilmNameItem key={film.filmId + Math.random()} {...film} />)
    useEffect(() => {
        setItems(films?.filter(film => film.professionKey === tabs))
        console.log(tabs)
    }, [tabs])

    return (
        <>
            <Grid item xs={12}>

                <Grid paddingBottom={2} item xs={12}>

                    <TabsName sex={sex} films={films} />

                </Grid>
                <Grid paddingBottom={2} item xs={12}>
                    <Grid container>
                        {filmsList}
                    </Grid>


                </Grid>

            </Grid>



        </>

    )
}

export default FilmsName