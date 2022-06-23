import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { IAward, IAwards } from '../../Interfaces/IAwards'
import { IFilm } from '../../Interfaces/IFilm'
import FilmIdPathTitle from '../common/FilmIdPathTitle'
import NoItems from '../common/NoItems'
import AwardItems from './AwardItems/AwardItems'

type Props = {
    film: IFilm
    awards: IAwards
}
type AwardsType = {
    name: string | null,
    items: IAward[]
}
type ArrayOfAwardsType = AwardsType[]

const Awards = ({ film, awards }: Props) => {
    const [awardNames, setAwardNames] = useState<Array<string | null>>([])
    useEffect(() => {
        if (awards.total) {
            const awardsArr: Array<string | null> = []
            awards.items.forEach(item => {
                if (awardsArr.includes(item.name) === false) {
                    awardsArr.push(item.name)
                    setAwardNames(awardsArr)
                }
            })
        }
    }, [awards])

    const arrayOfSortedAwards: ArrayOfAwardsType[] = []


    arrayOfSortedAwards.push(awardNames.map(item => {
        return {
            name: item,
            items: awards.items.filter(award => {
                return award.name === item
            })
        }
    }))

    const items = arrayOfSortedAwards[0].map(item => <AwardItems key={item.name} name={item.name} items={item.items} />)
    return (
        <Grid container>
            <Grid item xs={12}>
                <FilmIdPathTitle descrition='Награды' film={film} />
            </Grid>
            {awards.total === 0 ? <NoItems text='Наград' /> : <Grid item xs={12}>
                {items}
            </Grid>}


        </Grid>
    )
}

export default Awards