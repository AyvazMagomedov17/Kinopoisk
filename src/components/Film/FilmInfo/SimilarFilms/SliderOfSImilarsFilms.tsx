import { Box, Button, MobileStepper } from "@mui/material"
import React, { useEffect } from "react";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { ISimilars } from "../../../../Interfaces/ISimilars";
import SimilarFilmsItem from "./SimilarFilmsItem";
import { useStore } from "effector-react";
import { $filmId } from "../../../../models/film";
import { useMaxWidthQuery } from "../../../../hooks/mediaQuery";

type Props = {
    similars: ISimilars

}

const SliderOfSImilarsFilms = ({ similars }: Props) => {
    const _1100px = useMaxWidthQuery(1100)
    const _920px = useMaxWidthQuery(920)
    const _750px = useMaxWidthQuery(750)
    const _555px = useMaxWidthQuery(555)

    const filmId = useStore($filmId)
    const [activeStep, setActiveStep] = React.useState(0);
    const [countOfSimilarFilms, setCountOfSimilarFilms] = React.useState(6)
    useEffect(() => {
        setActiveStep(0)
    }, [filmId])
    const steps = similars.total > 5 ? similars.total - (countOfSimilarFilms - 1) : 1
    useEffect(() => {
        _555px ? setCountOfSimilarFilms(2) : _750px ? setCountOfSimilarFilms(3) : _920px ? setCountOfSimilarFilms(4) : _1100px ? setCountOfSimilarFilms(5) : setCountOfSimilarFilms(6)
    }, [_1100px, _920px, _750px, _555px])

    const similarFilms = similars.items.slice(activeStep, activeStep + countOfSimilarFilms).map(item => <SimilarFilmsItem key={item.filmId} {...item} />)
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
    return (
        <>
            <Box sx={{ minHeight: '430px', border: '1px solid rgba(156, 154, 160, 1)', display: 'flex', 'position': 'relative', 'justifyContent': 'center', 'paddingTop': '30px' }} >

                {similarFilms}



                <MobileStepper sx={{ 'position': 'absolute', }} steps={1} nextButton={
                    <Button sx={{
                        'transition': 'all 0.3s',
                        '&:hover': {
                            'transform': 'scale(1.1)',
                            'transition': 'all 0.3s'
                        }
                    }}
                        size="large"
                        onClick={handleNext}
                        disabled={steps > 1 ? activeStep === steps - 1 : true}
                    >
                        Далее
                        <KeyboardArrowRight />
                    </Button>
                }
                    backButton={
                        <Button sx={{
                            'transition': 'all 0.3s',
                            '&:hover': {
                                'transform': 'scale(1.1)',
                                'transition': 'all 0.3s'
                            }
                        }} size="large" onClick={handleBack} disabled={activeStep === 0}>
                            <KeyboardArrowLeft />
                            Назад
                        </Button>
                    } />
            </Box>



        </>
    )
}

export default SliderOfSImilarsFilms