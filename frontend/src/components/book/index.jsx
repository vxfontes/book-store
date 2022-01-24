import React, { useState } from "react";
import { Container, Button, Typography, Modal, Fade } from '@mui/material';

// local
import styles from './styles';

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

            <Modal className={styles().modal} aria-labelledby="Confirmar" aria-describedby="Confirmar senha" closeAfterTransition
                open={open} onClose={handleClose} >
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
        </>
    );
}

export default Book;