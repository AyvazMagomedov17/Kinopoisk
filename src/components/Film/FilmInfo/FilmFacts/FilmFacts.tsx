import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { EFactType } from '../../../../Interfaces/enums/EFactType'
import { IFacts } from '../../../../Interfaces/IFacts'
import FilmFactItem from './FilmFactItem'

type Props = {
    facts: IFacts
}

const FilmFacts = ({ facts }: Props) => {

    const [itemsLenght, setItemsLenght] = useState(3)
    const handleClick = () => {
        setItemsLenght(facts.total + 5)
    }
    const items = facts.items.slice(0, itemsLenght).map(item => <FilmFactItem key={item.text} {...item} />)
    return (
        <>
            {items}
            {
                facts.total > itemsLenght ? <button onClick={handleClick} ><Typography fontWeight={700} sx={{
                    'cursor': 'pointer',
                    'transition': 'all 0.3s',
                    '&:hover': {
                        'transform': 'scale(1.1)',
                        'transition': 'all 0.3s',
                    }
                }} >Показать еще...</Typography></button> : null
            }


        </>
    )
}

export default FilmFacts