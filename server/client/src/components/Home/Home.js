import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, Button, TextField } from '@material-ui/core'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input'
import { getPosts, getPostsBySearch } from '../../actions/posts';
import useStyles from './styles'
import Pagination from '../Pagination';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const classes = useStyles();

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {   //enter key
            searchPost();
        }
    }
    const handleAdd = (tag) => setTags([...tags, tag]);

    const handleDelete = (tagToDel) => setTags(tags.filter((tag) => tag !== tagToDel));

    const searchPost = () => {

        if (search.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            history((`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`));
        }
        else {
            history('/');
        }
    }
    return (
        <Grow in>
            <Container maxWidth="xl" >
                <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit" >
                            <h1 style={{textAlign:'center',fontFamily:"Playfair Display",margin:'0'}}>SEARCH</h1>
                            <ChipInput
                                style={{ margin: '10px 0' }}
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                label="Search Tags"
                                
                            />
                            <Button onClick={searchPost} className={classes.button} variant="contained" color="primary">Search</Button>

                        </AppBar>
                        
                        {(!searchQuery && (!tags || !tags.length)) && (
                            <Paper className={classes.pagination} >
                                <Pagination page={page} />
                            </Paper>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Grow>

    )
}

export default Home;