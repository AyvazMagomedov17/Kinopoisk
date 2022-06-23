import { Pagination } from '@mui/material'
import React from 'react'
import { useMaxWidthQuery } from '../../hooks/mediaQuery'

type Props = {
    currentPage: number
    setCurrentPage: (payload: number) => number | void
    pagesCount: number
}

const Paginator = ({ currentPage, setCurrentPage, pagesCount }: Props) => {
    const _530px = useMaxWidthQuery(530)
    const _445px = useMaxWidthQuery(445)
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };
    return (
        <Pagination size={_445px ? 'small' : _530px ? 'medium' : 'large'} variant='outlined' color='primary' count={pagesCount} page={currentPage} onChange={handleChange} />
    )
}

export default Paginator