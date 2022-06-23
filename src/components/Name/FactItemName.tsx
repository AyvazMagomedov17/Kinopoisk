import { Grid, Typography } from "@mui/material"
import { useMaxWidthQuery } from "../../hooks/mediaQuery"

type Props = {
    text: string
}

const FactItemName = ({ text }: Props) => {
    const _900px = useMaxWidthQuery(900)
    const _425px = useMaxWidthQuery(425)
    return (
        <Grid marginTop={2} item xs={12}>
            <Grid container>
                <Grid item xs={_900px ? 1 : 0.3}>
                    ◉
                </Grid>
                <Grid item xs={11}>
                    <Typography fontSize={_425px ? 15 : 17}>
                        {text}
                    </Typography>
                </Grid>
            </Grid>

        </Grid>

    )
}

export default FactItemName