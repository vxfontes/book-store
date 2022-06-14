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
            <img className={styles().thumb} src={book.image} alt={book.title} width="10%" onClick={handleOpen} />
            
            <Modal className={styles().modal}
                open={open} onClose={() => setopen(false)} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 750 }}>
                <Fade in={open}>
                    <div className={styles().windowModal} style={{ textAlign: 'center' }}>
                        <Typography variant="h4" gutterBottom component="div">Aviso</Typography>
                        <Typography style={{ marginBottom: '15px' }} variant="body1" gutterBottom component="div">Deseja apagar {subject.name}?</Typography>
                        <ColorButtonRed style={{ marginRight: '15px' }} variant="contained" color="primary" onClick={() => { deletar(); setopen(false) }}>Sim</ColorButtonRed>
                        <Button variant="contained" color="secondary" onClick={() => { setopen(false) }}>Não</Button>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}

export default Book;