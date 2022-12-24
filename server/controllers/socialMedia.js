const developpers = require('../models/Developper');
const post = require('../models/post');

/*
@create new skill
@delete a given skill
*/

//create a skill
const createSocialM = async (req, res) => {
    let { devId, name, link } = req.body
    if (!link || !name||!devId) return res.status(400).json({ message: 'all requirement are needed' })

    try {
        name = name.toLowerCase()
        console.log(link,name,devId);
        const _dev = await developpers.findOne({ _id: devId }).exec()
        //check dupplicate 
        const dup = _dev.socialMedias.filter(social => social.name == name)
        if (dup[0]) return res.status(409).json({ message: "social account already exist" })
        _dev.socialMedias.push({ name, link })
        const __dev = await _dev.save()
        const dev = await developpers.findOne({ _id: __dev._id }).select('-password -posts -__v').lean().exec()
        const posts = await post.find({ devId: __dev._id }).select('-__v').exec()
        return res.send({...dev, posts})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

//delete
const deleteSocialM = async (req, res) => {
    const { devId, socialId } = req.body
    if (!devId || !socialId) return res.status(400).json({ message: 'all requirement are needed' })
    try {
        const dev = await developpers.findOne({ _id: devId }).exec()
        dev.socialMedias.pull({ _id: socialId })
        const __dev = await dev.save();
        const _dev = await developpers.findOne({ _id: __dev._id }).select('-password -posts -__v').lean().exec()
        const posts = await post.find({ devId: __dev._id }).select('-__v').exec()
        return res.send({..._dev, posts})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

module.exports = {
    createSocialM,
    deleteSocialM
}

