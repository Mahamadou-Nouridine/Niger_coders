const developper = require("../models/Developper")
const post = require("../models/post")
const fs = require('fs')
/*
@put photo
@delete photo
*/

const putPhoto = async (req, res) => {
    const {devId} = req.body
    if (!devId) return res.status(400).json({ message: 'Id is required' })

    try {
        const photo = req.file
        if(!photo) return res.status(404).json({ message: 'photo is required' })
        const _dev = await developper.findOne({_id: devId}).exec()
        fs.unlink(`./uploads/${_dev.photo}`, (err) => {
            if (err) console.log(err)
        })

        const allPost = await post.find({}).exec()
        allPost.forEach(async pos=>{
            const foundPos = await post.findOne({_id: pos._id}).exec()
            if(foundPos.devId == devId){
                foundPos.devPhoto = photo.filename
            }
            foundPos.comments.forEach(com=>{
                if(com.author.authId == devId){
                    console.log(com)
                    com.author.photo = photo.filename
                }
            })
            await foundPos.save()
        })

        _dev.photo = photo.filename;
        const __dev = await _dev.save()

        const dev = await developper.findOne({ _id: __dev._id }).select('-password -posts -__v').lean().exec()
        const posts = await post.find({ devId: __dev._id }).select('-__v').exec()
        return res.send({...dev, posts})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const deletePhoto = async (req, res) => {
    const {devId} = req.body
    if (!devId) return res.status(400).json({ message: 'Id is required' })

    try {
        const allPost = await post.find({}).exec()
        allPost.forEach(async pos=>{
            const foundPos = await post.findOne({_id: pos._id}).exec()
            if(foundPos.devId == devId){
                foundPos.devPhoto = null
            }
            foundPos.comments.forEach(com=>{
                if(com.author.authId == devId){
                    console.log(com)
                    com.author.photo = null
                }
            })
            await foundPos.save()
        })
        const _dev = await developper.findOne({_id: devId}).exec()
        fs.unlink(`./uploads/${_dev.photo}`, (err) => {
            if (err) console.log(err)
        })
        _dev.photo = null;
        const __dev = await _dev.save()

        const dev = await developper.findOne({ _id: __dev._id }).select('-password -posts -__v').lean().exec()
        const posts = await post.find({ devId: __dev._id }).select('-__v').exec()
        return res.send({...dev, posts})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

module.exports = {
    putPhoto,
    deletePhoto,
}