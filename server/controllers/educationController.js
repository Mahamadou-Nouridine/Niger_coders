const developper = require('../models/Developper')
const post = require('../models/post')

/*
@create education
@delete education
*/

const createEdu = async (req, res) => {
    const { school, diploma, from, to, location, devId } = req.body
    if (!school || !diploma || !from || !to || !location || !devId) return res.status(400).json({ message: 'all filds are required' })

    try {
        const _dev = await developper.findOne({ _id: devId })
        const education = { school, diploma, from, to, location, devId }
        _dev.educations.push(education)
        const __dev = await _dev.save()
        const dev = await developper.findOne({ _id: __dev._id }).select('-password -posts -__v').lean().exec()
        const posts = await post.find({ devId: __dev._id }).select('-__v').exec()
        return res.send({...dev, posts})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

//delete a given education
const deleteEdu = async (req, res) => {
    const { eduId, devId } = req.body
    if (!eduId || !devId) return res.status(400).json({ message: 'All fields are required' })

    try {
        const _dev = await developper.findOne({ _id: devId }).exec()
        _dev.educations.pull({ _id: eduId })
        const __dev = await _dev.save()
        const dev = await developper.findOne({ _id: devId }).select('-password -posts -__v').lean().exec()
        const posts = await post.find({ devId: dev._id }).select('-__v').exec()
        return res.send({...dev, posts})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

module.exports = {
    createEdu,
    deleteEdu
}