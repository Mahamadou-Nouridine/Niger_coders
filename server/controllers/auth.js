const developper = require('../models/Developper')
const post = require('../models/post')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

/*
@login
@refresh
@logout
*/

//login
const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ message: 'All fields are required' })

    const _dev = await developper.findOne({ email: email }).select('-posts -__v').lean().exec()
    if (!_dev) return res.status(401).json({ message: 'dev not found' })
    const posts = await post.find({ devId: _dev._id }).select('-__v').exec()
    const match =   bcrypt.compare(password, _dev.password)
    if (!match) return res.status(400).json({ message: 'Password mismatch' })
    _dev.password = undefined
    const accessToken = jwt.sign(
        {
            'name': _dev.name,
            'email': _dev.email
        },
        process.env.ACCESS_TOKEN,
        {
            expiresIn: '60m'
        }
    )

    const refreshToken = jwt.sign(
        {
            'name': _dev.nom,
            'email': _dev.email
        },
        process.env.REFRESH_TOKEN,
        {
            expiresIn: '7d'
        }
    )

    res.cookie(
        'jwt',
        refreshToken,
        {
            httpOnly: true, //accessible only by web server 
            secure: true, //https
            sameSite: false, //cross-site cookie 
            maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match r
            domain: 'localhost',
        }
    )
    res.send({ accessToken, dev: { ..._dev, posts } })
}

//refresh 
const refresh = async (req, res) => {
    console.log(req.cookies)
    const cookies = req.cookies
    if (!cookies?.jwt) return res.status(403).json({ message: 'forbidden' })
    const refreshToken = cookies.jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN,
        async (error, decoded) => {
            if (error) return res.status(403).json({ message: 'Forbidden' })
            const dev = await developper.findOne({ email: decoded.email }).select('-password -posts -__v').lean().exec()
            const posts = await post.find({ devId: dev._id }).select('-__v').exec()
            if (!dev) return res.status(400).json({ message: 'dev not found' })
            const accessToken = jwt.sign(
                {
                    "nom": dev.name,
                    "email": dev.email
                },
                process.env.ACCESS_TOKEN,
                {
                    expiresIn: '60m'
                }
            )
            res.send({ accessToken, dev:{...dev, posts} })
        }
    )
}

//logout
const logout = (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204) //No content
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
    return res.json({ message: 'Cookie cleared' })
}

module.exports = {
    login,
    refresh,
    logout
}