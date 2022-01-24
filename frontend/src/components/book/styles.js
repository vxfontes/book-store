import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({

    thumb: {
        height: '28vh'
    },

    modal: {
        maxWidth: '100%',
        maxHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    windowModal: {
        backgroundColor: '#606060',
        alignItems: 'center',
        display: 'block',
        borderRadius: '5px',
        borderColor:'black',
        padding: '18px 18px 15px 18px',
        maxHeight: '100%',
        maxWidth: '100%',
    },

});

export default styles;