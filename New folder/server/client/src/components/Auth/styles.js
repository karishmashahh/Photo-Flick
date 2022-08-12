import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "rgb(153, 221, 255)",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        background: "#161729",
        color: "white",
        "&:hover": {
            background: "rgba(22, 23, 41, 0.8)",
        },
    },
    googleButton: {
        marginBottom: theme.spacing(2),
        background: "#161729",
        color: "white",
        "&:hover": {
            background: "rgba(22, 23, 41, 0.8)",
        },
    },




}));