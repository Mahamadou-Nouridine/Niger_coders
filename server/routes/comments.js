const router = require('express').Router()
const {creatComment, deleteComment} = require('../controllers/commentsController')
const verifyJwt = require('../middlewares/verifyJwt')

router.route('/')
            .post(verifyJwt,creatComment)
            .delete(verifyJwt,deleteComment)

module.exports = router