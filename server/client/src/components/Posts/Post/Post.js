import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button, ButtonBase } from '@material-ui/core';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles'
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';

var moment = require('moment')

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (post && post.likes && post.likes.length > 0) {
            return post.likes.find((like) => like === ((user && user.result && user.result.sub) || (user && user.result && user.result._id)))
                ? (
                    <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };
    const openPost = () => {
        history(`/posts/${post._id}`);
    }


    return (
        <Card className={classes.card} raised >
            <ButtonBase className={classes.cardAction} onClick={openPost}>
                <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
                <div className={classes.overlay}>
                    <Typography variant="h6" >{post.name}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>

                <div className={classes.details}>
                    <Typography style={{ color: "#595da6",fontSize:'18px' }} variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
                <CardContent>
                    <Typography className={classes.body} variant="body2" color="textSecondary" component="p" >{post.message}</Typography>
                </CardContent>
            </ButtonBase>
            <CardActions className={classes.CardActions}>
                <Button className={classes.button} size="small" color="primary" disabled={!user || !user.result} onClick={() => dispatch(likePost(post._id))}>
                    <Likes />
                </Button>
                {((user && user.result && user.result.sub === post.creator) || (user && user.result && user.result._id === post.creator)) &&
                    (
                        <Button className={classes.button} size="small" color="primary" onClick={() => dispatch(deletePost(post._id))} >
                            <DeleteIcon fontSize="small" />
                            Delete
                        </Button>
                    )}
                {((user && user.result && user.result.sub=== post.creator) || (user && user.result && user.result._id === post.creator)) && (
                    <div className={classes.overlay2}>
                        <Button style={{ color: 'white' }} size="medium" onClick={() => setCurrentId(post._id)}>
                            <MoreHorizIcon fontSize="default" onClick={()=>{history(`/create/${post._id}`)}}/>
                        </Button>
                    </div>
                )}

            </CardActions>
        </Card>

    );
}
export default Post;