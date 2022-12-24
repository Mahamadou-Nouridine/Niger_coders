const router = require('express').Router()
const {createSocialM, deleteSocialM} = require('../controllers/socialMedia')
const verifyJwt = require('../middlewares/verifyJwt')

router.route('/')
        .post(verifyJwt,createSocialM)
        .delete(verifyJwt,deleteSocialM)

module.exports = router