const router = require('express').Router()
const {createGithub, deleteGithub} = require('../controllers/github')
const verifyJwt = require('../middlewares/verifyJwt')

router.route('/')
        .post(verifyJwt,createGithub)
        .delete(verifyJwt,deleteGithub)

module.exports = router