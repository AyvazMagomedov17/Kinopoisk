import { Card, CardActionArea, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'
import { useMaxWidthQuery } from '../../hooks/mediaQuery'
import { EProfessionKey } from '../../Interfaces/enums/EProfessionKey'
import { IStaff, IStaffItem } from '../../Interfaces/IStaff'

type Props = {

}

const CastItem = ({ description, nameEn, nameRu, posterUrl, professionKey, professionText, staffId }: IStaffItem) => {
    const router = useRouter()
    const _900px = useMaxWidthQuery(900)
    const _500px = useMaxWidthQuery(500)
    const _425px = useMaxWidthQuery(425)
    const handleClick = () => {
        router.push(`/name/${staffId}`)
    }
    return (
        <Card onClick={handleClick} sx={{ 'maxWidth': '800px', 'marginBottom': 2, minHeight: '140px', 'boxShadow': 'none', 'borderRadius ': '20px', 'borderTop': '1px solid gray', 'borderBottom': '1px solid gray' }}>
            <CardActionArea sx={{ 'maxWidth': '800px', minHeight: '140px', }}>
                <Grid sx={{ 'padding': '10px 0 10px 30px' }} columnGap={1} container >
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={_500px ? 4 : _900px ? 3 : 2} >

                                <img style={{ 'borderRadius': '10px', 'objectFit': 'contain', 'height': _425px ? '100px' : '120px' }} src={posterUrl} alt="" />
                            </Grid>
                            <Grid item xs={7}>
                                <Typography fontWeight={600} fontSize={17} sx={{ 'paddingTop': '3%', 'paddingBottom': '1%' }}>{nameRu || nameEn}</Typography>
                                <Typography sx={{ 'paddingBottom': '2%' }} fontWeight={600} color='rgba(148, 148, 148, 1)' fontSize={14}>{nameEn}</Typography>
                                {professionKey === EProfessionKey.ACTOR ? <Typography fontSize={17}>...{description}</Typography> : null}
                            </Grid>
                        </Grid>


                    </Grid>

                </Grid>
            </CardActionArea>

        </Card >

    )
}

export default CastItem