const developpers = require('../models/Developper')
const post = require('../models/post')

/*
@create new skill
@delete a given skill
@edit a given skill
*/

//create a skill
const createSkill = async (req, res) => {
    const { devId, name, percentage } = req.body
    if (!devId || !name) return res.status(400).json({ message: 'all requirement are needed' })

    try {
        const dev = await developpers.findOne({ _id: devId }).exec()
        //check dupplicate 
        const dup = dev.skills.filter(skill => skill.name == name)
        if (dup[0]) return res.status(409).json({ message: "Skill already exist" })
        dev.skills.push({ name, percentage })
        const _dev = await dev.save()
        const __dev = await developpers.findOne({ _id: _dev._id }).select('-password -posts -__v').lean().exec()
        const posts = await post.find({ devId: _dev._id }).select('-__v').exec()
        return res.send({...__dev, posts})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'server error' })
    }
}

//delete
const deleteSkill = async (req, res) => {
    console.log("deleting skill");
    const { devId, skillId } = req.body
    if (!devId || !skillId) return res.status(400).json({ message: 'all requirement are needed' })
    try {
        const dev = await developpers.findOne({ _id: devId }).exec()
        dev.skills.pull({ _id: skillId })
        const _dev = await dev.save();
        const __dev = await developpers.findOne({ _id: _dev._id }).select('-password -posts -__v').lean().exec()
        const posts = await post.find({ devId: _dev._id }).select('-__v').exec()
        return res.send({...__dev, posts})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

//edit skill
const editSkill = async (req, res) => {
    console.log("editing skill");
    const { devId, skillId, percentage } = req.body
    if (!devId || !skillId|| (percentage == undefined)) return res.status(400).json({ message: 'all requirement are needed' })
    try {
        const dev = await developpers.findOne({ _id: devId }).exec()
        dev.skills.forEach(skill => {
            if(skill._id== skillId){
                skill.percentage = percentage
            }
        })
        const _dev = await dev.save();
        const __dev = await developpers.findOne({ _id: _dev._id }).select('-password -posts -__v').lean().exec()
        const posts = await post.find({ devId: _dev._id }).select('-__v').exec()
        return res.send({...__dev, posts})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

module.exports = {
    createSkill,
    editSkill,
    deleteSkill
}

