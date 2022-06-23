import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Slider, TextField, Typography } from "@mui/material";
import { useStore } from "effector-react";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { EFilmsOrder } from "../../Interfaces/enums/EFilmsOrder";
import { EType } from "../../Interfaces/enums/enums";
import { setCastFilterEv, setIsOnCastPage } from "../../models/castFilter";
import { $currentPageOfFilms } from "../../models/currentPageOfFilms";
import { $filtres, setFiltresEv } from "../../models/filtres";
import { $genresCountriesList } from "../../models/genresCountriesList";

type Props = {}

const FilterSelects = (props: Props) => {
    const genresAndCountries = useStore($genresCountriesList)
    const filter = useStore($filtres)
    const router = useRouter()
    const currentPage = useStore($currentPageOfFilms)
    const genres = Number(router.query.genres)
    const countries = Number(router.query.countries)
    const type = router.query.type
    const ratingFrom = Number(router.query.ratingFrom)
    const ratingTo = Number(router.query.ratingTo)
    const yearFrom = Number(router.query.yearFrom)
    const yearTo = Number(router.query.yearTo)
    const keyWord = router.query.keyword ? router.query.keyword : ''
    const order = router.query.order ? router.query.order : EFilmsOrder.RATING

    function valuetext(value: number) {
        return `${value}°C`;
    }
    return (
        <>
            <Formik initialValues={
                {
                    genres: genres || filter.genres,
                    countries: countries || filter.countries,
                    type: type || filter.type,
                    ratingFrom: ratingFrom || filter.ratingFrom,
                    ratingTo: ratingTo || filter.ratingTo,
                    yearFrom: yearFrom || filter.yearFrom,
                    yearTo: yearTo || filter.yearTo,
                    keyWord: keyWord,
                    order: order
                }
            } onSubmit={(filtres) => {
                router.replace(`movies?page=${1}&countries=${filtres.countries}&genres=${filtres.genres}&type=${filtres.type}&ratingFrom=${filtres.ratingFrom}&ratingTo=${filtres.ratingTo}&yearFrom=${filtres.yearFrom}&yearTo=${filtres.yearTo}&keyword=${filtres.keyWord}&order=${filtres.order}`)
            }}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Box sx={{ maxWidth: 200, marginBottom: '10px' }}>
                            <TextField sx={{ marginBottom: '10px' }} value={values.keyWord} onChange={handleChange} name='keyWord' label="Поиск по названию" />
                            <FormControl sx={{ 'marginBottom': '10px' }} fullWidth>

                                <InputLabel >Сортировать по...</InputLabel>
                                <Select
                                    name='order'
                                    value={values.order}
                                    label='Сортировать по...'
                                    onChange={handleChange}
                                >
                                    <MenuItem value={EFilmsOrder.RATING}>Рейтингу</MenuItem>
                                    <MenuItem value={EFilmsOrder.NUM_VOTE}>Популярности</MenuItem>
                                    <MenuItem value={EFilmsOrder.YEAR}>Году</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel >Жанр</InputLabel>
                                <Select
                                    name="genres"
                                    value={values.genres}
                                    label="Жанр"
                                    onChange={handleChange}
                                >
                                    {genresAndCountries?.genres.map(genre => <MenuItem key={genre.id} value={genre.id}>{genre.genre}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ maxWidth: 200, marginBottom: '10px' }}>
                            <FormControl fullWidth>
                                <InputLabel >Страна</InputLabel>
                                <Select
                                    name='countries'
                                    value={values.countries}
                                    label="Страна"
                                    onChange={handleChange}
                                >

                                    {genresAndCountries?.countries.map(country => <MenuItem key={country.id} value={country.id}>{country.country}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ maxWidth: 200, marginBottom: '10px' }}>
                            <FormControl fullWidth>
                                <InputLabel >Тип</InputLabel>
                                <Select
                                    name='type'
                                    value={values.type}
                                    label="Тип"
                                    onChange={handleChange}
                                >
                                    <MenuItem value='ALL'>Все</MenuItem>)
                                    <MenuItem value='FILM'>Фильм</MenuItem>)
                                    <MenuItem value='TV_SERIES'>Сериал</MenuItem>)
                                    <MenuItem value='TV_SHOW'>Тв-шоу</MenuItem>)
                                    <MenuItem value='MINI_SERIES'>Мини-сериал</MenuItem>)

                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ 'maxWidth': '200px' }}>

                            <Typography marginTop={1} gutterBottom fontSize={13}>Минимальный рейтинг</Typography>
                            <Slider
                                aria-label="Минимальный рейтинг"
                                name='ratingFrom'
                                marks
                                min={0}
                                max={10}
                                getAriaLabel={() => 'Minimum distance'}
                                value={values.ratingFrom}
                                onChange={handleChange}
                                step={1}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                            />
                            <Typography marginTop={1} gutterBottom fontSize={13}>Максимальный рейтинг</Typography>
                            <Slider
                                aria-label="Максимальный рейтинг"
                                name='ratingTo'
                                marks
                                min={0}
                                max={10}
                                value={values.ratingTo}
                                onChange={handleChange}
                                step={1}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}

                            />
                            <TextField sx={{ marginBottom: '10px' }} onChange={handleChange} name='yearFrom' label="Минимальный год" />
                            <TextField sx={{ marginBottom: '10px' }} onChange={handleChange} name='yearTo' label="Максимальный год" />
                            <Button fullWidth variant='contained' type="submit" onClick={() => handleSubmit()}>Поиск</Button>
                        </Box>


                    </>
                )}
            </Formik>


        </>

    );
}

export default FilterSelects