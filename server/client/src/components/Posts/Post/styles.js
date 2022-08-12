import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',

    },
    border: {
        border: 'solid',

    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
        backgroundColor: 'rgb(243, 230, 255,0.9)',

    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
       
    },
    body:{
       color:'black',
        fontFamily:'Lato',
        marginLeft:'2px',
        fontSize:'17px'
    },
    title: {
        padding: '0 16px',
        marginBottom:'0',
        fontFamily:"DM Serif Text",
        fontSize:'30px'
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardAction: {
        display: 'block',
        textAlign: 'initial',
    },
    button: {
        color: '#161729',
        "&:hover": {
            color: '#161729',
            opacity:'0.7'
        },
    },
    fontFamily:"Playfair Display"
}
);