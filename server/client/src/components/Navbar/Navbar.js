import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import img from '../../Images/image.png'
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    

    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation();
    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history('/');
        setUser(null);
        window.location.reload();
    };

    useEffect(() => {

        let token = '';
        if (user && user.token) {
            token = user.token;
        }
        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime())
                logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (

        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">PHOTO FLICK</Typography>
                <img className={classes.image} src={img} alt="image" ></img>
            </div>
            <Toolbar className={classes.toolbar}>

                {user && user.result && user.result.name? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button className={classes.buttonn} onClick={() => { history('/create') }}>CREATE</Button>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>LOGOUT</Button>
                    </div>) : (

                    <Button className={classes.logout} component={Link} to="/auth" variant="contained" color="primary">SIGN IN</Button>
                )
                }
            </Toolbar>

        </AppBar>
    );

}
export default Navbar;