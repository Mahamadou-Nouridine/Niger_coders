const router = require('express').Router()
const {createEdu, deleteEdu} = require('../controllers/educationController')
const verifyJwt = require('../middlewares/verifyJwt')

router.route('/')
        .post(verifyJwt,createEdu)
        .delete(verifyJwt,deleteEdu)

module.exports = router