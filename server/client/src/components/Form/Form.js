import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useStyles from './styles'
import { useNavigate } from 'react-router-dom';
import { createPost, updatePost } from '../../actions/posts';


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState(
        {
            title: '', message: '', tags: '', selectedFile: ''
        }
    );
    const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null);
    const history = useNavigate();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();

    useEffect(() => {
        if (post)
            setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, { ...postData, name: user.result.name }));
        }
        else {
            dispatch(createPost({ ...postData, name: user.result.name }, history));
        }
        history('/');
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ title: '', message: '', tags: '', selectedFile: '' });

    }


    if (user == null || user.result == null || user.result.name === null) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please sign in to create memories
                </Typography>

            </Paper>
        )
    }

    return (
        <Paper className={classes.paper} >
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6" style={{textAlign:'center',fontFamily:"Playfair Display",fontSize:'30px'}}>{currentId ? 'EDITING' : 'CREATING'} A MEMORY</Typography>

                <TextField
                    name="title"
                    
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="message"
                    
                    label="Message"
                    fullWidth
                    multiline rows={3}
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name="tags"
                  
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" size="small" type="submit" fullWidth >Submit</Button>
                <Button className={classes.button} variant="contained" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}
export default Form;