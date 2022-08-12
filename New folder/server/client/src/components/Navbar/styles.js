import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        marginTop: '10px',
        marginBottom: '40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        backgroundColor: 'rgb(16, 6, 31)',
       borderBottom:'4px solid rgb(243, 230, 255,0.9)',
    },
    heading: {
        color: "white",
        textDecoration: 'none',
        fontSize: '2em',
        fontWeight: 500,
        fontFamily: "Megrim",
        fontWeight:'bolder'
    },
    image: {
        marginLeft: '10px',
        marginTop: '5px',
        height:'50px',
        width:'50px'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
        },
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            marginTop: 20,
            justifyContent: 'center',
        },
    },
    logout: {
        marginLeft: '10px',
        background: 'rgb(243, 230, 255,0.9)',
        color: "black",
        "&:hover": {
            background: "rgb(243, 230, 255,0.5)",
        },
        padding:'5px 10px',
        borderRadius:'4px',
        fontFamily:"Playfair Display"
    },
    buttonn:{
        color:'white',
        border:' 2px solid rgb(243, 230, 255,0.9)',
        marginLeft: '10px',
        padding:'3px 10px',
        borderRadius:'4px',
        fontFamily:"Playfair Display"
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: 'rgb(243, 230, 255,0.9)',
        fontFamily:'Lato',
        fontWeight:'bold'
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));