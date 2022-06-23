import { Button, FormControl, Grid, Input, InputLabel, TextField } from "@mui/material"
import { Formik } from "formik"
import Router, { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"

type Props = {}

const PersonsSearch = (props: Props) => {

    const router = useRouter()
    const name = router.query.name
    const page = router.query.page

    return (
        <Grid item xs={12}>
            <Grid flexDirection='column' alignItems='center' container>
                <Formik initialValues={{
                    name: ''
                }} onSubmit={values => {
                    const inputValue = values.name

                    if (inputValue)
                        router.replace(name ? router.asPath.replace(`page=${1}&name=${encodeURI(String(name))}`, `page=${1}&name=${inputValue}`) : router.asPath + `?page=${1}&name=${inputValue}`)
                }}>{({ values, handleChange, handleSubmit }) => (<>
                    <FormControl sx={{ 'maxWidth': '500px', 'marginBottom': 2, 'minWidth': '300px' }}  >
                        <TextField onChange={handleChange} name="name" value={values.name} label='Поиск по имени' variant="outlined" />
                    </FormControl>
                    <Button onClick={() => {
                        handleSubmit()
                    }} sx={{ 'maxWidth': '300px', 'height': '50px', 'borderRadius': '20px', 'minWidth': '200px' }} variant="outlined" type="submit">Поиск</Button>
                </>)}</Formik>






            </Grid>
        </Grid >
    )
}

export default PersonsSearch