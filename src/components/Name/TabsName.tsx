import { Grid, Tab, Tabs, Typography } from '@mui/material'
import { useStore } from 'effector-react'
import React from 'react'
import { EExtendedProffesionKey } from '../../Interfaces/enums/EProfessionKey'
import { ESex } from '../../Interfaces/enums/ESex'
import { IPersonFilm } from '../../Interfaces/IPerson'
import { $tabs, changeFilmsNameTabsEv } from '../../models/tabs'

type Props = {
    films: IPersonFilm[] | undefined
    sex: ESex | undefined | null
}

const color = {
    color: 'white'
}
const TabsName = ({ films, sex }: Props) => {
    const handleChangeTabs = (event: any, payload: EExtendedProffesionKey) => {
        changeFilmsNameTabsEv(payload)
    }
    const tabs = useStore($tabs).filmsName
    const actorTab = films?.filter(film => film.professionKey === EExtendedProffesionKey.ACTOR)
    const directorTab = films?.filter(film => film.professionKey === EExtendedProffesionKey.DIRECTOR)
    const producerTab = films?.filter(film => film.professionKey === EExtendedProffesionKey.PRODUCER)
    const writerTab = films?.filter(film => film.professionKey === EExtendedProffesionKey.WRITER)
    const editorTab = films?.filter(film => film.professionKey === EExtendedProffesionKey.EDITOR)
    const himselfTab = films?.filter(film => film.professionKey === EExtendedProffesionKey.HIMSELF || film.professionKey === EExtendedProffesionKey.HERSELF)
    const hronoTitrTab = films?.filter(film => film.professionKey === EExtendedProffesionKey.HRONO_TITR_MALE || film.professionKey === EExtendedProffesionKey.HRONO_TITR_FEMALE)
    return (
        <>
            <Tabs variant="scrollable"
                onChange={handleChangeTabs} value={tabs} indicatorColor='secondary' >
                {actorTab?.length ?


                    <Tab value={EExtendedProffesionKey.ACTOR} label={
                        <>
                            <Typography sx={color} >Актер</Typography>
                            <Typography sx={color} textAlign='start' fontSize={9}>{actorTab?.length} фил.</Typography>
                        </>
                    } />

                    : null
                }
                {directorTab?.length ? <Tab value={EExtendedProffesionKey.DIRECTOR} label={
                    <>
                        <Typography sx={color}>Режиссер</Typography>
                        <Typography sx={color} textAlign='start' fontSize={9}>{directorTab.length} фил.</Typography>
                    </>
                } />
                    : null}
                {producerTab?.length ? <Tab value={EExtendedProffesionKey.PRODUCER} label={
                    <>
                        <Typography sx={color}>Продюссер</Typography>
                        <Typography sx={color} textAlign='start' fontSize={9}>{producerTab.length} фил.</Typography>
                    </>
                } /> : null}
                {writerTab?.length ? <Tab value={EExtendedProffesionKey.WRITER} label={
                    <>
                        <Typography sx={color}>Сценарист</Typography>
                        <Typography sx={color} textAlign='start' fontSize={9}>{writerTab.length} фил.</Typography>
                    </>
                } /> : null}
                {editorTab?.length ? <Tab value={EExtendedProffesionKey.EDITOR} label={
                    <>
                        <Typography sx={color}>Редактор</Typography>
                        <Typography sx={color} textAlign='start' fontSize={9}>{editorTab.length} фил.</Typography>
                    </>
                } /> : null}
                {himselfTab?.length ? <Tab value={sex === ESex.MALE ? EExtendedProffesionKey.HIMSELF : EExtendedProffesionKey.HERSELF} label={
                    <>
                        <Typography sx={color}>Актер: играет самого себя</Typography>
                        <Typography sx={color} textAlign='start' fontSize={9}>{himselfTab.length} фил.</Typography>
                    </>
                } /> : null}
                {hronoTitrTab?.length ? <Tab value={sex === ESex.MALE ? EExtendedProffesionKey.HRONO_TITR_MALE : EExtendedProffesionKey.HRONO_TITR_FEMALE} label={
                    <>
                        <Typography sx={color}>Актер: Хроника, В титрах не указан</Typography>
                        <Typography sx={color} textAlign='start' fontSize={9}>{hronoTitrTab.length} фил.</Typography>
                    </>
                } /> : null}
            </Tabs >
            <style jsx>
                {`
                .text{
                    color: white;
                }
                `}
            </style>
        </>

    )
}

export default TabsName