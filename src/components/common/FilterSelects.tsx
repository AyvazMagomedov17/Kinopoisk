import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Slider, TextField, Typography } from "@mui/material";
import { useStore } from "effector-react";
import { Formik } from "formik";
import React from "react";
import { EType } from "../../Interfaces/enums/enums";
import { setCastFilterEv, setIsOnCastPage } from "../../models/castFilter";
import { setFiltresEv } from "../../models/filtres";
import { $genresCountriesList } from "../../models/genresCountriesList";

type Props = {}

const FilterSelects = (props: Props) => {
    const genresAndCountries = useStore($genresCountriesList)

    function valuetext(value: number) {
        return `${value}°C`;
    }
    return (
        <>
            <Formik initialValues={
                {
                    genres: null as null | number,
                    countries: null as null | number,
                    type: EType.ALL as EType,
                    ratingFrom: 0,
                    ratingTo: 10,
                    yearFrom: 1000,
                    yearTo: 3000,
                    keyWord: ''
                }
            } onSubmit={(values) => {
                console.log(values)
                setFiltresEv(values)

            }}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Box sx={{ maxWidth: 200, marginBottom: '10px' }}>
                            <FormControl fullWidth>
                                <InputLabel >Жанр</InputLabel>
                                <Select
                                    name="genres"
                                    value={values.genres}
                                    label="Жанр"
                                    onChange={handleChange}
                                >
                                    {genresAndCountries?.genres.map(genre => <MenuItem value={genre.id}>{genre.genre}</MenuItem>)}
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

                                    {genresAndCountries?.countries.map(country => <MenuItem value={country.id}>{country.country}</MenuItem>)}
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
                            <TextField sx={{ marginBottom: '10px' }} value={values.keyWord} onChange={handleChange} name='keyWord' label="Поиск по названию" />
                        </Box>

                        <Button sx={{ width: '200px', }} variant='contained' type="submit" onClick={() => handleSubmit()}>Поиск</Button>
                    </>
                )}
            </Formik>


        </>

    );
}

export default FilterSelects