const {login, refresh, logout} = require('../controllers/auth')
const router = require('express').Router()

router.route('/login')
        .post(login)
router.route('/refresh')
        .get(refresh)
router.route('/logout')
        .get(logout)

module.exports = router