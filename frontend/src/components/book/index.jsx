import React, { useState } from "react";
import { Container, Button, Typography, Modal, Fade, Box, Backdrop } from '@mui/material';

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
                        <Typography variant="h4" gutterBottom component="div">Aviso</Typography>
                        <Typography style={{ marginBottom: '15px' }} variant="body1" gutterBottom component="div">Deseja apagar {book.title}?</Typography>
                        <ColorButtonRed style={{ marginRight: '15px' }} variant="contained" color="primary" onClick={() => { setOpen(false) }}>Sim</ColorButtonRed>
                        <Button variant="contained" color="secondary" onClick={() => { setOpen(false) }}>Não</Button>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}

export default Book;