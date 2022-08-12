import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, Button, TextField } from '@material-ui/core'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input'
import { getPosts, getPostsBySearch } from '../../actions/posts';
//import useStyles from './styles'
import Pagination from '../Pagination';

const Create = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useNavigate();
   console.log(id);
   // const classes = useStyles();

    return(
    <Container maxWidth="xl" >
    <Grid container justify="space-between" alignItems="stretch" spacing={3} >
    <Form currentId={id} setCurrentId={setCurrentId} />
    </Grid>
    </Container>)
}
export default Create;