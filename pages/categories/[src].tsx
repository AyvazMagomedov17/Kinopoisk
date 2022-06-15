import React from 'react'
import Movies from '../../src/components/Categories/Categories'

type Props = {

}

const MoviePage = ({ }: Props) => {
    return (
        <>
            <Movies baseUrl='/categories' />


        </>
    )
}

export default MoviePage