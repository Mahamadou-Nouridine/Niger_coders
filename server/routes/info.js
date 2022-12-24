const router = require('express').Router()
const editInfo = require('../controllers/info')
const verifyJwt = require('../middlewares/verifyJwt')

router.route('/')
        .put(verifyJwt, editInfo)


module.exports = router