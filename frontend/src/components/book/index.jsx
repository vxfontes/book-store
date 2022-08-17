import React, { useState } from "react";
import { Container, Typography, Modal, Fade, Box, Backdrop, Grid } from '@mui/material';

// local
import styles from './styles';
import ColorButtonRed from "../buttons/Red";


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
            <img className={styles().thumb} src={book.image} alt={book.title} width="10%" onClick={handleOpen} />

            <Modal className={styles().modal}
                open={open} onClose={() => setOpen(false)} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 750 }}>
                <Fade in={open}>
                    <Box className={styles().windowModal} style={{ textAlign: 'center' }}>
                        <Typography variant="h4" gutterBottom component="div">{book.title}</Typography>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography style={{ marginBottom: '15px' }} variant="body1" gutterBottom component="div">{book.description}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <img className={styles().thumb} src={book.image} alt={book.title} />
                            </Grid>
                        </Grid>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}

export default Book;