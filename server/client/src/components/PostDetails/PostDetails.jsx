import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import CommentSection from './CommentSection';
import { useParams, useNavigate } from 'react-router-dom';
import { getPost, getPostsBySearch } from '../../actions/posts';
import useStyles from './styles';
var moment = require('moment')

const PostDetails = () => {
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const history = useNavigate();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    useEffect(() => {
        if (post) {
            dispatch(getPostsBySearch({ search: 'none', tags: post.tags.join(',') }));
        }
    }, [post]);

    if (!post) return null;

    const openPost = (_id) => history(`/posts/${_id}`);

    if (isLoading) {
        return (
            <Paper elevation={6} className={classes.loadingPaper}>
                <CircularProgress size="7em" />
            </Paper>
        );
    }
    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
    if (recommendedPosts.length > 5) {
        recommendedPosts.splice(5, recommendedPosts.length - 1);
    }

    return (
        <Paper style={{ padding: '20px', borderRadius: '15px', backgroundColor: 'rgb(243, 230, 255,0.9)' }} >
            <div className={classes.card}>
                <div className={classes.section}>
                    <Typography variant="h3" component="h2" style={{fontFamily:"DM Serif Text"}}>{post.title}</Typography>
                    <Typography style={{ color: " #595da6" }} gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags && post.tags.map((tag) => `#${tag} `)}</Typography>
                    <Typography gutterBottom variant="body1" component="p" style={{fontFamily:"Lato",marginLeft:'5px',fontSize:'20px'}}>{post.message}</Typography>
                    <Typography variant="h6" style={{fontFamily:"Playfair Display" ,fontWeight:'bolder'}}>CREATED BY: {post.name}</Typography>
                    <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                    <Divider style={{ margin: '20px 0' }} />

                    <CommentSection post={post} />
                    <Divider style={{ margin: '20px 0' }} />
                </div>
                <div className={classes.imageSection}>
                    <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
                </div>
            </div>
            {recommendedPosts.length && (
                <div className={classes.section}>
                    <Typography gutterBottom variant="h5" style={{fontFamily:"Playfair Display"}}>You might also like:</Typography>
                    <Divider />
                    <div className={classes.recommendedPosts}>
                        {recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
                            <div style={{ margin: '20px', cursor: 'pointer' ,maxWidth:'300px'}} onClick={() => openPost(_id)} key={_id}>
                                <Typography style={{fontFamily:"DM Serif Text"}}gutterBottom variant="h6">{title}</Typography>
                                <Typography gutterBottom variant="subtitle1">{name}</Typography>
                                <Typography style={{fontFamily:"Lato"}} gutterBottom variant="subtitle2" >{message}</Typography>
                                <Typography gutterBottom variant="subtitle2" >Likes: {likes.length}</Typography>
                                <img src={selectedFile} width="200px" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Paper>
    );
};

export default PostDetails;