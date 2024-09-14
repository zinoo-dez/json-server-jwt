const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const auth = require('../middleware/auth');

router.get('/', postController.getAllPosts); // /api/posts
router.get('/:id', postController.getPostById); // /api/posts/:id
router.post('/', auth, postController.createPost); // /api/posts
router.put('/:id', auth, postController.updatePost); // /api/posts/:id
router.delete('/:id', auth, postController.deletePost); // /api/posts/:id

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const auth = require('../middleware/auth');
// const {
//     getAllPosts,
//     getPostById,
//     createPost,
//     updatePost,
//     deletePost
// } = require('../controllers/postController');

// router.get('/', getAllPosts);
// router.get('/:id', getPostById);
// router.post('/', auth, createPost);
// router.put('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);

// module.exports = router;
