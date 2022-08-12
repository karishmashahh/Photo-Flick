import express from 'express';
import { commentPost, likePost, getPost, getPosts, createPost, updatePost, deletePost, getPostsBySearch } from '../controllers/posts.js';
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.get('/search', getPostsBySearch);
router.get('/:id', getPost)
router.post('/:id/commentPost', auth, commentPost);
router.post('/create', auth, createPost);
router.patch('/create/:id', auth, updatePost);

export default router;