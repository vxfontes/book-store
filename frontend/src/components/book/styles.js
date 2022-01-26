import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({

    thumb: {
        height: '28vh'
    },

    modal: {
        maxWidth: '60%',
        minHeight: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        border: 'none'
    },

    windowModal: {
        backgroundColor: '#606060',
        // alignItems: 'center',
        // display: 'block',
        borderRadius: '5px',
        // borderColor: 'black',
        padding: '18px 18px 15px 18px',
        // maxHeight: '100%',
        // maxWidth: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1200,
        height: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },

});

export default styles;