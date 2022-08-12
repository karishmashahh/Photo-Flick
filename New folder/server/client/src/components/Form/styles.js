import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),

        },
    },
    paper: {
        padding: theme.spacing(2),
        backgroundColor: 'rgb(243, 230, 255,0.9)',
        maxWidth:'600px',
        marginTop:'50px',
        margin:'auto'
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        color: "#242333",
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
        background: "#161729",
        color: "white",
        "&:hover": {
            background: "rgba(22, 23, 41, 0.8)",
        },
        width:'60%',
        fontFamily:"Playfair Display"
    },
    button: {
        background: "#161729",
        color: "white",
        "&:hover": {
            background: "rgba(22, 23, 41, 0.8)",
        },
        width:'60%',
        fontFamily:"Playfair Display"
    }
}));