import React, { useState } from "react";
import { Container, Button, Typography, Modal, Fade, Box } from '@mui/material';

// local
import styles from './styles';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Book = ({ book }) => {

    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <>
            <img className={styles().thumb} src={book.image} alt={book.title} onClick={handleOpen} />

            {/* <div className={styles().modal} >
                <Modal closeAfterTransition open={open} onClose={handleClose} >
                    <Fade in={open}>
                        <div className={styles().windowModal} style={{ textAlign: 'center' }}>
                            <img className={styles().thumb} src={book.image} alt={book.title} onClick={handleOpen} />
                            <Typography variant="h6" component="h2">
                                {book.title}
                            </Typography>
                            <Typography>
                                {book.description}
                            </Typography>
                        </div>
                    </Fade>
                </Modal>
            </div> */}

            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>
    );
}

export default Book;