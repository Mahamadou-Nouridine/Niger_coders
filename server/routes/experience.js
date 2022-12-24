const router = require('express').Router()
const {createExp, deleteExp} = require('../controllers/experienceController')
const verifyJwt = require('../middlewares/verifyJwt')

router.route('/')
        .post(verifyJwt,createExp)
        .delete(verifyJwt,deleteExp)

module.exports = router