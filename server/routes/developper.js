const router = require('express').Router()
const {createDev, deleteDev, getAllDev, getOneDev}= require('../controllers/developperController')
const verifyJwt = require('../middlewares/verifyJwt')

router.route('/')
            .get(getAllDev)
            .post(createDev)
            .delete(verifyJwt,deleteDev)
router.route('/:name')
            .get(verifyJwt,getOneDev)

module.exports = router
