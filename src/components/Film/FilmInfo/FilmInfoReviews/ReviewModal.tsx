import { Grid, Modal, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { IReview } from "../../../../Interfaces/IReviews";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useMaxWidthQuery } from "../../../../hooks/mediaQuery";

interface Props extends IReview {
    isOpen: boolean
    closeModal: () => void
}

const ReviewModal = ({ isOpen, author, date, description, kinopoiskId, negativeRating, positiveRating, title, type, closeModal }: Props) => {

    const _1494px = useMaxWidthQuery(1494)
    const _1026px = useMaxWidthQuery(1026)
    const _796px = useMaxWidthQuery(796)
    const _654px = useMaxWidthQuery(654)
    const _560px = useMaxWidthQuery(650)
    const _495px = useMaxWidthQuery(495)
    const _403px = useMaxWidthQuery(403)
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        'width': '97vw',
        'minHeight': '400px',
        'maxHeight': '500px',
        bgcolor: 'white',
        boxShadow: 24,
        p: 4,
        overflow: 'auto',
        borderRadius: '15px'
    };
    return (
        <Modal
            open={isOpen}
        >
            <Box sx={style}>
                <Grid container>
                    <Grid marginBottom={1} item xs={11}>
                        <Typography fontWeight={600} variant="h6" component='p'>{author}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <button onClick={closeModal}>
                            <Typography fontWeight={900} fontSize={20}>
                                ✖
                            </Typography>
                        </button>

                    </Grid>
                    <Grid marginBottom={1} item xs={_403px ? 12 : _495px ? 9 : _560px ? 7 : _654px ? 6 : _796px ? 5 : _1026px ? 3 : _1494px ? 2 : 1}>
                        <Grid justifyContent='flex-start' container>
                            <Grid item xs={6}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Grid alignItems='center' container>
                                            <ThumbUpAltIcon sx={{ 'marginRight': 1 }} />
                                            {positiveRating}
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid alignItems='center' container>
                                    <Grid item xs={6}>
                                        <Grid alignItems='center' container>
                                            <ThumbDownIcon sx={{ 'marginRight': 1 }} />
                                            {negativeRating}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid marginBottom={2} item xs={12}>
                        <Typography fontSize={13} fontStyle='italic'>{date}</Typography>
                    </Grid>
                    <Grid fontWeight={600} textAlign='center' item xs={12}>{title}</Grid>
                    <Grid item xs={12}>
                        {description}
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}

export default ReviewModal