const { putPhoto, deletePhoto } = require('../controllers/profile')
const verifyJwt = require('../middlewares/verifyJwt')
const router = require('express').Router()

router.route("/")
            .put(verifyJwt,putPhoto)
            .delete(verifyJwt,deletePhoto)


module.exports = router