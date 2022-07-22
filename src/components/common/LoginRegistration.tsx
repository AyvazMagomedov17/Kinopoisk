import { Alert, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField } from '@mui/material'
import { Container } from '@mui/system'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { IGenresCountriesList } from '../../Interfaces/IGenresCountriesList'
import Header from './Header/Header'
import * as yup from 'yup'
import TitlePage from './TitlePage'
import { $user, loginFx, registrationFx } from '../../models/user'
import { useStore } from 'effector-react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Router from 'next/router'
type Props = {
    genresCountriesList: IGenresCountriesList,
    isLogin: boolean


}

const LoginRegistration = ({ genresCountriesList, isLogin }: Props) => {
    const [isPasswordVisible, setisPasswordVisible] = useState(false)
    const [isConfirmPasswordVisible, setisConfirmPasswordVisible] = useState(false)
    const [isLoginSubmitted, setIsLoginSubmitted] = useState(false)
    const [isRegistrationSubmitted, setIsRegistrationSubmitted] = useState(false)

    const user = useStore($user)
    const loginError = user?.loginError
    const registrationError = user?.registrationError
    const validationSchemaForRegistration = yup.object().shape({
        name: yup.string().required('Обязательное поле'),
        email: yup.string().email('Невалидный e-mail').required('Обязательное поле'),
        password: yup.string().required('Обязательное поле').min(3, 'Длина пароля должна быть больше 3 символов').max(12, 'Длина пароля должна быть меньше 12 символов'),
        confirmPassword: yup.string().oneOf([yup.ref('password ')], 'Пароли не совпадают').required('Обязательное поле')
    })
    const validationSchemaForLogin = yup.object().shape({
        email: yup.string().email('Невалидный e-mail').required('Обязательное поле'),
        password: yup.string().required('Обязательное поле').min(3, 'Длина пароля должна быть больше 3 символов').max(12, 'Длина пароля должна быть меньше 12 символов'),
    })
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }
    const handleClickShowPassword = () => {
        setisPasswordVisible(prev => !prev)
    }
    const handleClickShowConfirmPassword = () => {
        setisConfirmPasswordVisible(prev => !prev)
    }
    const handleClickOnLogin = () => {
        Router.replace('/login')
    }
    const handleClickOnRegistration = () => {
        Router.replace('/registration')
    }


    return (
        <>
            <Header genresCountriesList={genresCountriesList} />
            <Container >

                {isLogin ? <Formik validateOnBlur validationSchema={validationSchemaForLogin} initialValues={{
                    email: '',
                    password: '',
                }} onSubmit={values => {
                    setIsLoginSubmitted(true)
                    loginFx({ email: values.email, password: values.password })
                }}>{({ values, handleChange, handleSubmit, errors, touched, dirty, handleBlur, isValid }) => (
                    <Grid marginTop='5vh' justifyContent='center' container>
                        <Grid textAlign='center' marginBottom={2} item xs={6.01}>
                            <TitlePage>Войти / <Link sx={{ 'cursor': 'pointer' }} color='rgba(22, 0, 114, 0.8)' onClick={handleClickOnRegistration}>Регистрация</Link></TitlePage>
                        </Grid>
                        <Grid marginBottom={2} item xs={6.01}>
                            <TextField onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    handleSubmit()
                                }
                            }} type='email' onChange={handleChange} value={values.email} name='email' onBlur={handleBlur} color='success' fullWidth label="Введите e-mail" variant="outlined" />
                            {touched.email && errors.email && <Alert severity="error">{errors.email}</Alert>}
                        </Grid>
                        <Grid marginBottom={2} item xs={6.01}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel color='success' >Введите пароль</InputLabel>
                                <OutlinedInput onBlur={handleBlur} color='success' name='password' fullWidth

                                    type={isPasswordVisible ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Введите пароль"
                                />
                            </FormControl>
                            {touched.password && errors.password && <Alert severity="error">{errors.password}</Alert>}
                        </Grid>
                        <Grid marginBottom={2} item xs={6.01}>
                            {loginError && isLoginSubmitted && <Alert severity="error">{loginError}</Alert>}
                        </Grid>
                        <Grid item xs={6.01}>
                            <Button onClick={() => { handleSubmit() }} disabled={!isValid} sx={{ 'borderRadius': '15px' }} color='warning' variant='contained' fullWidth>Войти</Button>
                        </Grid>
                    </Grid>
                )}</Formik> :
                    <Formik validateOnBlur validationSchema={validationSchemaForRegistration} initialValues={{
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }} onSubmit={values => {
                        setIsRegistrationSubmitted(true)
                        registrationFx({ name: values.name, email: values.email, password: values.password })
                    }}>{({ values, handleChange, handleSubmit, errors, touched, dirty, handleBlur, isValid }) => (
                        <Grid marginTop='5vh' justifyContent='center' container>
                            <Grid textAlign='center' marginBottom={2} item xs={6.01}>
                                <TitlePage>Регистрация / <Link sx={{ 'cursor': 'pointer' }} color='rgba(22, 0, 114, 0.8)' onClick={handleClickOnLogin}>Войти</Link></TitlePage>
                            </Grid>

                            <Grid marginBottom={2} item xs={6.01}>
                                <TextField onChange={handleChange} value={values.name} name='name' onBlur={handleBlur} color='success' fullWidth label="Введите имя" variant="outlined" />
                                {touched.name && errors.name && <Alert severity="error">{errors.name}</Alert>}
                            </Grid>
                            <Grid marginBottom={2} item xs={6.01}>
                                <TextField type='email' onChange={handleChange} value={values.email} name='email' onBlur={handleBlur} color='success' fullWidth label="Введите e-mail" variant="outlined" />
                                {touched.email && errors.email && <Alert severity="error">{errors.email}</Alert>}
                            </Grid>
                            <Grid marginBottom={2} item xs={6.01}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel color='success' >Введите пароль</InputLabel>
                                    <OutlinedInput onBlur={handleBlur} color='success' name='password' fullWidth

                                        type={isPasswordVisible ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Введите пароль"
                                    />
                                </FormControl>
                                {touched.password && errors.password && <Alert severity="error">{errors.password}</Alert>}
                            </Grid>
                            <Grid marginBottom={2} item xs={6.01}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel color='success' >Подтвердите пароль</InputLabel>
                                    <OutlinedInput onBlur={handleBlur} color='success' name='confirmPassword' fullWidth

                                        type={isConfirmPasswordVisible ? 'text' : 'password'}
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowConfirmPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {isConfirmPasswordVisible ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Подтвердите пароль"
                                    />
                                </FormControl>
                                {touched.confirmPassword && errors.confirmPassword && <Alert severity="error">{errors.confirmPassword}</Alert>}
                            </Grid>
                            <Grid marginBottom={2} item xs={6.01}>
                                {registrationError && isRegistrationSubmitted && <Alert severity="error">{registrationError}</Alert>}
                            </Grid>
                            <Grid item xs={6.01}>
                                <Button onClick={() => { handleSubmit() }} disabled={!isValid} sx={{ 'borderRadius': '15px' }} color='warning' variant='contained' fullWidth>Зарегистрироваться</Button>
                            </Grid>
                        </Grid>
                    )}</Formik>}


            </Container>
        </>
    )
}

export default LoginRegistration