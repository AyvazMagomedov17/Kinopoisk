import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useMaxWidthQuery } from '../../../hooks/mediaQuery'
import { ESexRu } from '../../../Interfaces/enums/ESex'
import { IPerson } from '../../../Interfaces/IPerson'
import FilmMainLink from '../../Film/FilmMain/FilmMainLink'
import Spouse from '../Spouse'
import AboutPersonItem from './AboutPersonItem'

type Props = {
    person: IPerson | null
}

const MainName = ({ person }: Props) => {
    const spouses = person?.spouses.map(spouse => <Spouse key={spouse.personId} {...spouse} />)
    const _900px = useMaxWidthQuery(900)
    return (
        <Grid justifyContent='center' container>
            <Grid textAlign={_900px ? 'center' : 'start'} marginBottom={1} item xs={12}>
                <Typography fontWeight={600} variant={_900px ? 'h4' : 'h3'}>
                    {person?.nameRu || person?.nameEn}
                </Typography>

            </Grid>
            <Grid textAlign={_900px ? 'center' : 'start'} marginBottom={5} item xs={12}>
                <Typography fontStyle='italic' variant='h6'>
                    {person?.nameRu ? person.nameEn : null}
                </Typography>
            </Grid>
            <Grid textAlign={_900px ? 'center' : 'start'} marginBottom={3} item xs={12}>
                <Typography variant='h5' >О персоне:</Typography>

            </Grid>
            <AboutPersonItem title='Карьера' info={person?.profession} />
            <AboutPersonItem title='Пол' info={ESexRu[person?.sex || 'MALE']} />
            {person?.growth ? <AboutPersonItem title='Рост' info={person?.growth + ' см'} /> : null}
            <AboutPersonItem title='Дата рождения' info={person?.birthday + (!person?.death ? ` (${person?.age + ' лет'})` : '')} />
            <AboutPersonItem title='Место рождения' info={person?.birthplace} />
            {person?.death ? <>
                <AboutPersonItem title='Дата смерти' info={person?.death} />
                <AboutPersonItem title='Место смерти' info={person?.deathplace} />
            </> : null}
            <Grid marginTop={2} marginBottom={2} item xs={12}>
                <Grid container>
                    <Grid marginBottom={1} xs={12} item>
                        <Typography display='inline' variant='h5'>Супруги:</Typography>
                    </Grid>
                    {person?.spouses.length ? <Grid item xs={7}>{spouses}</Grid> : <Typography >нет</Typography>}

                </Grid>
            </Grid>

        </Grid>
    )
}

export default MainName