const developpers = require('../models/Developper')

/*
@create new github
@delete github
*/

//create a github
const createGithub = async (req, res) => {
    const { devId, github } = req.body
    if (!devId || !github) return res.status(400).json({ message: 'all requirement are needed' })

    try {
        const dev = await developpers.findOne({ _id: devId }).exec()
        dev.github = github
        const _dev = await dev.save()
        return res.send(_dev)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

//delete github
const deleteGithub = async (req, res) => {
    const { devId} = req.body
    if (!devId ) return res.status(400).json({ message: 'all requirement are needed' })

    try {
        const dev = await developpers.findOne({ _id: devId }).exec()
        dev.github = undefined
        const _dev = await dev.save()
        return res.send(_dev)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}


module.exports = {
    createGithub,
    deleteGithub
}

