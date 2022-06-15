import { ImageListItem, ImageList, Paper } from "@mui/material"
import { IImages } from "../../Interfaces/IImages"

type Props = {
    images: IImages
}

const ImageItems = ({ images }: Props) => {
    const handleClickOnImage = (url: string) => {
        localStorage.setItem('imageUrl', url)
    }
    function srcset(image: string, size: number, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }
    return (
        <ImageList variant="quilted" cols={3} >
            {images.items.map(item => (
                <ImageListItem cols={1} rows={1} key={item.imageUrl}>
                    <a onClick={() => {
                        handleClickOnImage(item.imageUrl)
                    }} href={`/image`} target='_blank'>
                        <Paper sx={{ 'border': '1px solid black', 'minHeight': '100px' }}>
                            <img
                                {...srcset(item.imageUrl, 121)}
                                alt={item.imageUrl}
                                loading="lazy" />
                        </Paper>

                    </a>



                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default ImageItems