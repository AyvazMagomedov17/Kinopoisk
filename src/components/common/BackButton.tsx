import Router from "next/router"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from "@mui/material";
type Props = {
    black?: boolean,
    white?: boolean
}

const BackButton = ({ black, white }: Props) => {
    const handleClick = () => Router.back()
    return <button onClick={handleClick}><ArrowBackIosIcon sx={{
        'transition': 'all 0.3s',
        '&:hover': {
            'transform': 'scale(1.1)',
            'transition': 'all 0.3s'
        }
    }} color={white ? 'error' : 'action'} fontSize="large" /></button >
}

export default BackButton