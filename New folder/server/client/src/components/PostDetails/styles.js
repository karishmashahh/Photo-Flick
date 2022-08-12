import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    media: {
        borderRadius: '20px',
        objectFit: 'cover',
        minHeight:'300px',
        maxHeight: '600px',
        maxWidth:'100%',
       // minWidth:'400px',
        margin:'auto'
    },
    card: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            flexDirection: 'column',
        },
        margin:'auto',
        padding: '5px'
    },
    section: {
        borderRadius: '20px',
        margin: '10px',
        flex: 1,
    },
    imageSection: {
        marginLeft: '20px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    recommendedPosts: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
           // maxWidth:'auto'
        },
    },
    loadingPaper: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
    },
    commentsOuterContainer: {
        display: 'flex',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
           // maxWidth:'auto'
        },
        justifyContent: 'space-between',
        
    },
    commentsInnerContainer: {
        height: '200px',
        overflowY: 'auto',
    }
}));
