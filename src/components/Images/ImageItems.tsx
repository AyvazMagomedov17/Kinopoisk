import { ImageListItem, ImageList } from "@mui/material"
import { useState } from "react"
import { useMaxWidthQuery } from "../../hooks/mediaQuery"
import { IImages } from "../../Interfaces/IImages"
import ImageModal from "./ImageModal"

type Props = {
    images: IImages
}

const ImageItems = ({ images }: Props) => {
    const _768px = useMaxWidthQuery(768)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleOpenModal = () => setIsModalOpen(true)
    const handleCloseModal = () => setIsModalOpen(false)
    function srcset(image: string, size: number, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }
    return (
        <>
            <ImageList variant="masonry" cols={3} >
                {images.items.map(item => (
                    <ImageListItem cols={1} rows={1} key={item.imageUrl}>


                        <a href={item.imageUrl} target='__blank'>
                            <img
                                {...srcset(item.imageUrl, 121)}
                                alt={item.imageUrl}
                                loading="lazy" />


                        </a>



                    </ImageListItem>
                ))}
            </ImageList>

        </>

    )
}

export default ImageItems