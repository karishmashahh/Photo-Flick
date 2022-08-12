import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    appBarSearch: {
        borderRadius: 4,
        marginBottom: '1rem',
        display: 'flex',
        padding: '16px',
        backgroundColor: 'rgb(243, 230, 255,0.9)',

    },
    pagination: {
        borderRadius: 4,
        marginTop: '1rem',
        padding: '10px',
        backgroundColor: 'rgb(243, 230, 255,0.9)',
        fontFamily:"Playfair Display"
    },
    gridContainer: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',

        },
    },
    button: {
        background: "#161729",
        color: "white",
        "&:hover": {
            background: "rgba(22, 23, 41, 0.8)",
        },
    },
    fontFamily:"Playfair Display"


}));