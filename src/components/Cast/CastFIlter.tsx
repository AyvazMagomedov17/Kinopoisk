import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Box } from '@mui/system'
import { useStore } from 'effector-react'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { EProfessionKey, EProfessionKeyRu } from '../../Interfaces/enums/EProfessionKey'
import { $castFilter, setCastFilterEv } from '../../models/castFilter'

type Props = {}

const CastFIlter = (props: Props) => {
    const router = useRouter()
    const order = router.query.order
    const filter = useStore($castFilter)
    return (
        <><Formik initialValues={{
            type: filter
        }} onSubmit={values => {
            setCastFilterEv(values.type)
        }}>{({ values, handleChange, handleSubmit }) => (
            <>
                <Box sx={{ 'maxWidth': '200px' }}>
                    <FormControl fullWidth>
                        <InputLabel>Тип</InputLabel>
                        <Select
                            name='type'
                            value={values.type}
                            onChange={(e) => {
                                handleChange(e)
                                handleSubmit()
                            }}
                            label='Тип'
                        >
                            <MenuItem value={EProfessionKey.UNKNOWN}>Все</MenuItem>
                            <MenuItem value={EProfessionKey.ACTOR}>{EProfessionKeyRu.ACTOR}</MenuItem>
                            <MenuItem value={EProfessionKey.DIRECTOR}>{EProfessionKeyRu.DIRECTOR}</MenuItem>
                            <MenuItem value={EProfessionKey.WRITER}>{EProfessionKeyRu.WRITER}</MenuItem>
                            <MenuItem value={EProfessionKey.COMPOSER}>{EProfessionKeyRu.COMPOSER}</MenuItem>
                            <MenuItem value={EProfessionKey.OPERATOR}>{EProfessionKeyRu.OPERATOR}</MenuItem>
                            <MenuItem value={EProfessionKey.PRODUCER}>{EProfessionKeyRu.PRODUCER}</MenuItem>
                            <MenuItem value={EProfessionKey.EDITOR}>{EProfessionKeyRu.EDITOR}</MenuItem>
                            <MenuItem value={EProfessionKey.DESIGN}>{EProfessionKeyRu.DESIGN}</MenuItem>
                            <MenuItem value={EProfessionKey.TRANSLATOR}>{EProfessionKeyRu.TRANSLATOR}</MenuItem>
                            <MenuItem value={EProfessionKey.VOICE_DIRECTOR}>{EProfessionKeyRu.VOICE_DIRECTOR}</MenuItem>

                        </Select>
                    </FormControl>
                </Box>
            </>
        )}</Formik></>
    )
}

export default CastFIlter