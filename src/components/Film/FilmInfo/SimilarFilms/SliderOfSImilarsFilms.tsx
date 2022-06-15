import { Box, Button, MobileStepper } from "@mui/material"
import React, { useEffect } from "react";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { ISimilars } from "../../../../Interfaces/ISimilars";
import SimilarFilmsItem from "./SimilarFilmsItem";
import { useStore } from "effector-react";
import { $filmId } from "../../../../models/film";

type Props = {
    similars: ISimilars

}

const SliderOfSImilarsFilms = ({ similars }: Props) => {
    const filmId = useStore($filmId)
    const [activeStep, setActiveStep] = React.useState(0);
    useEffect(() => {
        setActiveStep(0)
    }, [filmId])
    const steps = similars.total > 5 ? similars.total - 5 : 1
    console.log('steps', steps)
    const similarFilms = similars.items.slice(activeStep, activeStep + 6).map(item => <SimilarFilmsItem key={item.filmId} {...item} />)
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



                <MobileStepper sx={{ 'position': 'absolute', }} activeStep={activeStep} variant="dots" steps={steps} nextButton={
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