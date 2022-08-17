import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({

    thumb: {
        height: '28vh'
    },

    windowModal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: "#ffffff",
        color: '#ffff',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

});

export default styles;