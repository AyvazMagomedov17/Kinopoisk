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
        <Tabs variant="scrollable"
            onChange={handleChangeTabs} value={tabs} indicatorColor='secondary' textColor='secondary'>
            {actorTab?.length ?


                <Tab value={EExtendedProffesionKey.ACTOR} label={
                    <>
                        <Typography>Актер</Typography>
                        <Typography textAlign='start' fontSize={9}>{actorTab?.length} фил.</Typography>
                    </>
                } />

                : null
            }
            {directorTab?.length ? <Tab value={EExtendedProffesionKey.DIRECTOR} label={
                <>
                    <Typography>Режиссер</Typography>
                    <Typography textAlign='start' fontSize={9}>{directorTab.length} фил.</Typography>
                </>
            } />
                : null}
            {producerTab?.length ? <Tab value={EExtendedProffesionKey.PRODUCER} label={
                <>
                    <Typography>Продюссер</Typography>
                    <Typography textAlign='start' fontSize={9}>{producerTab.length} фил.</Typography>
                </>
            } /> : null}
            {writerTab?.length ? <Tab value={EExtendedProffesionKey.WRITER} label={
                <>
                    <Typography>Сценарист</Typography>
                    <Typography textAlign='start' fontSize={9}>{writerTab.length} фил.</Typography>
                </>
            } /> : null}
            {editorTab?.length ? <Tab value={EExtendedProffesionKey.EDITOR} label={
                <>
                    <Typography>Редактор</Typography>
                    <Typography textAlign='start' fontSize={9}>{editorTab.length} фил.</Typography>
                </>
            } /> : null}
            {himselfTab?.length ? <Tab value={sex === ESex.MALE ? EExtendedProffesionKey.HIMSELF : EExtendedProffesionKey.HERSELF} label={
                <>
                    <Typography>Актер: играет самого себя</Typography>
                    <Typography textAlign='start' fontSize={9}>{himselfTab.length} фил.</Typography>
                </>
            } /> : null}
            {hronoTitrTab?.length ? <Tab value={sex === ESex.MALE ? EExtendedProffesionKey.HRONO_TITR_MALE : EExtendedProffesionKey.HRONO_TITR_FEMALE} label={
                <>
                    <Typography>Актер: Хроника, В титрах не указан</Typography>
                    <Typography textAlign='start' fontSize={9}>{hronoTitrTab.length} фил.</Typography>
                </>
            } /> : null}
        </Tabs >
    )
}

export default TabsName