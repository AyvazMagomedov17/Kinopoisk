import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { Box } from "@mui/system"
import { useStore } from "effector-react"
import { Formik } from "formik"
import { useRouter } from "next/router"
import { EImageType, EImageTypeRu } from "../../Interfaces/enums/EImageType"
import { $combinedImagesFilter, $imagesFilter, setImagesFilter } from "../../models/film"

type Props = {}

const ImagesFilter = (props: Props) => {
    const router = useRouter()
    const page = router.query.page
    const type = router.query.type
    const filter = useStore($combinedImagesFilter)
    return (
        <Formik enableReinitialize initialValues={
            {
                type: type || EImageType.STILL
            }
        } onSubmit={values => {
            const value = values.type

            router.replace(page && type ? router.asPath.replace(`page=${page}&type=${type}`, `page=${filter.$imagesPage}&type=${value}`) : router.asPath + `?page=${filter.$imagesPage}&type=${value}`)
        }}>
            {({ values, handleChange, handleSubmit }) => (
                <>
                    <Box sx={{ 'maxWidth': '300px' }}>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='type'
                                value={values.type}
                                onChange={(e) => {
                                    handleChange(e)
                                    handleSubmit()
                                }}
                                label='Тип'

                            >
                                <MenuItem value={EImageType.STILL}>{EImageTypeRu.STILL} </MenuItem>
                                <MenuItem value={EImageType.WALLPAPER}>{EImageTypeRu.WALLPAPER} </MenuItem>
                                <MenuItem value={EImageType.POSTER}>{EImageTypeRu.POSTER} </MenuItem>
                                <MenuItem value={EImageType.SCREENSHOT}>{EImageTypeRu.SCREENSHOT} </MenuItem>
                                <MenuItem value={EImageType.PROMO}>{EImageTypeRu.PROMO} </MenuItem>
                                <MenuItem value={EImageType.CONCEPT}>{EImageTypeRu.CONCEPT} </MenuItem>
                                <MenuItem value={EImageType.FAN_ART}>{EImageTypeRu.FAN_ART} </MenuItem>
                                <MenuItem value={EImageType.SHOOTING}>{EImageTypeRu.SHOOTING} </MenuItem>
                                <MenuItem value={EImageType.COVER}>{EImageTypeRu.COVER} </MenuItem>
                            </Select>
                        </FormControl>

                    </Box>
                </>
            )}
        </Formik>
    )
}

export default ImagesFilter