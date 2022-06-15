import { Pagination } from '@mui/material'
import React from 'react'

type Props = {
    currentPage: number
    setCurrentPage: (payload: number) => number | void
    pagesCount: number
}

const Paginator = ({ currentPage, setCurrentPage, pagesCount }: Props) => {

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };
    return (
        <Pagination size='large' variant='outlined' color='primary' count={pagesCount} page={currentPage} onChange={handleChange} />
    )
}

export default Paginator