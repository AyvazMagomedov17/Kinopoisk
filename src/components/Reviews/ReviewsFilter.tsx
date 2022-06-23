import { InputLabel, MenuItem, Select } from '@mui/material'
import { Box } from '@mui/system'
import { useStore } from 'effector-react'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { EReviewsSortType } from '../../Interfaces/enums/EReviewsSortType'
import { $reviewsFiltres, $reviewsOrder, setReviewsOrder } from '../../models/film'

type Props = {}

const ReviewsFilter = (props: Props) => {
    const router = useRouter()
    const reviewsFiltres = useStore($reviewsFiltres)

    const order = router.query.order
    const page = router.query.page
    return (
        <Formik enableReinitialize initialValues={{
            type: order || EReviewsSortType.DATE_DESC
        }} onSubmit={values => {
            const type = values.type
            router.replace(router.query.page && router.query.order ? router.asPath.replace(`page=${page}&order=${order}`, `page=${1}&order=${type}`) : router.asPath + `?page=${1}&order=${type}`)
        }} >
            {({ values, handleChange, handleSubmit }) => (
                <>
                    <Box sx={{ 'maxWidth': '300px' }}>
                        <InputLabel>Сортировать по...</InputLabel>
                        <Select
                            name='type'
                            value={values.type}
                            onChange={(e) => {
                                handleChange(e)
                                handleSubmit()
                            }}

                        >
                            <MenuItem value={EReviewsSortType.DATE_DESC}  >Сначала новые </MenuItem>
                            <MenuItem value={EReviewsSortType.DATE_ASC}  >Сначала старые </MenuItem>
                            <MenuItem value={EReviewsSortType.USER_POSITIVE_RATING_DESC}  >Больше лайков</MenuItem>
                            <MenuItem value={EReviewsSortType.USER_POSITIVE_RATING_ASC}  >Меньше лайков</MenuItem>
                            <MenuItem value={EReviewsSortType.USER_NEGATIVE_RATING_DESC}  >Больше дизлайков</MenuItem>
                            <MenuItem value={EReviewsSortType.USER_NEGATIVE_RATING_ASC}  >Меньше дизлайков  </MenuItem>
                        </Select>
                    </Box>
                </>
            )}
        </Formik>
    )
}

export default ReviewsFilter