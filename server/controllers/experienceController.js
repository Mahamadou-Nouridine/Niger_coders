const developper = require('../models/Developper')
const post = require('../models/post')

/*
@create experience
@delete experience
*/

//create experience
const createExp = async (req, res) => {
    const { company, job, from, to, location, devId } = req.body

    if (!company || !job || !from || !to || !location || !devId) return res.status(400).json({ message: 'All fields must be provided.' })
    try {
        const _dev = await developper.findOne({ _id: devId }).exec()
        const experience = { company, job, from, to, location, devId }
        _dev.experiences.push(experience)
        await _dev.save()
        const dev = await developper.findOne({ _id: _dev._id }).select('-password -posts -__v').lean().exec()
        const posts = await post.find({ devId: dev._id }).select('-__v').exec()
        return res.send({...dev, posts})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

//delete a given experience
const deleteExp = async (req, res) => {
    const { devId, expId } = req.body
    console.log(devId, expId);
    if (!devId || !expId) return res.status(400).json({ message: 'All fields are required' })

    try {
        const _dev = await developper.findOne({ _id: devId }).exec()
        _dev.experiences.pull({ _id: expId })
        await _dev.save()
        const dev = await developper.findOne({ _id: devId }).select('-password -posts -__v').lean().exec()
        const posts = await post.find({ devId: dev._id }).select('-__v').exec()
        return res.send({...dev, posts})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

module.exports = {
    createExp,
    deleteExp
}