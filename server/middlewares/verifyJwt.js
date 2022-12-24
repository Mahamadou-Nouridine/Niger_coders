const { verify } = require('jsonwebtoken')


const verifyJwt = async (req, res, next) => {
    const Auth = req.headers.authorization || req.headers.Authorization

    try {
        console.log(Auth)
        if (!Auth.startsWith('bearer')) { return res.status(401).json({ message: "unauthorized" }) }

        const token = Auth.split(' ')[1]

        verify(
            token,
            process.env.ACCESS_TOKEN,
            (error, decoded) => {
                if (error) return res.status(401).json({ message: 'Unauthorized' })
                next()
            }
        )
    } catch (error) {
        if(error) console.log(error);
        res.status(401).json({ message: "unauthorized" })
    }

}

module.exports = verifyJwt