const developper = require('../models/Developper')
const post = require('../models/post')

/*
@create edit Info
*/


const editInfo = async (req, res) => {
    const { location,company,bio,github, devId } = req.body
    if (!location|| !company || !bio || !github || !devId) return res.status(400).json({ message: 'all filds are required' })

    try {
        const _dev = await developper.findOne({ _id: devId })
        _dev.company= company
        _dev.bio= bio
        _dev.github= github
        _dev.location = location
        const __dev = await _dev.save()
        const dev = await developper.findOne({ _id: __dev._id }).select('-password -posts -__v').lean().exec()
        const posts = await post.find({ devId: __dev._id }).select('-__v').exec()
        return res.send({...dev, posts})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}


module.exports = editInfo