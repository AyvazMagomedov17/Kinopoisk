import { Modal } from "@mui/material"
import { Box } from "@mui/system"

type Props = {
    isOpen: boolean
    handleClose: () => void
    img: string
}
const style = {
    position: 'absolute' as 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    height: '80vh',
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const ImageModal = ({ isOpen, handleClose, img }: Props) => {
    return (
        <Modal sx={style} onClose={handleClose} open={isOpen}>

            <img style={{ 'width': '80vw', 'height': '100%', 'objectFit': 'contain' }} src={img} alt="" />

        </Modal>
    )
}

export default ImageModal