const router = require('express').Router()
const {createSkill, deleteSkill, editSkill} = require('../controllers/skillsController')
const verifyJwt = require('../middlewares/verifyJwt')

router.route('/')
        .post(verifyJwt,createSkill)
        .put(verifyJwt,editSkill)
        .delete(verifyJwt,deleteSkill)

module.exports = router