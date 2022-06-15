import { Card, CardActionArea, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'
import { EProfessionKey } from '../../Interfaces/enums/EProfessionKey'
import { IStaff, IStaffItem } from '../../Interfaces/IStaff'

type Props = {

}

const CastItem = ({ description, nameEn, nameRu, posterUrl, professionKey, professionText, staffId }: IStaffItem) => {
    const router = useRouter()
    const handleClick = () => {
        router.push(`/persons/${staffId}`)
    }
    return (
        <Card onClick={handleClick} sx={{ 'maxWidth': '800px', 'marginBottom': 2, minHeight: '140px', 'boxShadow': 'none', 'borderRadius ': '20px', 'borderTop': '1px solid gray', 'borderBottom': '1px solid gray' }}>
            <CardActionArea>
                <Grid sx={{ 'padding': '10px 0 10px 50px' }} columnGap={1} container >
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={2} >
                                <Box sx={{ 'maxWidth': '70px', }}>
                                    <img src={posterUrl} alt="" />
                                </Box>


                            </Grid>
                            <Grid item xs={9}>

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