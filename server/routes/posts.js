const router = require('express').Router()
const{ createPost, getAllPosts, deletePost } =require('../controllers/postsController')
const verifyJwt = require('../middlewares/verifyJwt')

router.route('/')
                .get(getAllPosts)
                .post(verifyJwt,createPost)
                .delete(verifyJwt,deletePost)

module.exports = router