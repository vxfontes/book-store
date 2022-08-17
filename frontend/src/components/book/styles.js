import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({

    thumb: {
        height: '28vh'
    },

    windowModal: {
        background: "rgb(107, 106, 106, 0.8)",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '70%',
        maxWidth: '70%',
        border: '2px solid #000',
        borderRadius: '10px',
        boxShadow: 24,
        p: 4,
        padding: '20px 10px 20px 10px',
    }

});

export default styles;