const { response } = require('express')
const developpers = require('../models/Developper')
const post = require('../models/post')

/*
@get all posts
@create a new post
@delete a post
*/

//get all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await post.find({}).exec()
        return res.send(posts)
    } catch (error) {
        console.log(error)
        return res.status(500).send('Server error')
    }
}

//create a new post
const createPost = async (req, res) => {
    const { text, devId } = req.body

    if (!text || !devId) return res.status(400).json({ message: 'All field are required' })
    try {
        //check if the user exists
        const dev = await developpers.findOne({ _id: devId }).exec()
        if (!dev) return res.status(400).json({ message: 'Developper doesn\'t exist' })
        const savedPost = await post.create({ devName: dev.name, devPhoto: dev.photo ? dev.photo : null, devId, text, date: new Date().toJSON().slice(0, 10) })
        dev.posts.push({ postId: savedPost._id })
        const savedDev = await dev.save()
        const __dev = await developpers.findOne({ _id: savedDev._id }).select('-password -posts -__v').lean().exec()
        const posts = await post.find({ devId: savedDev._id }).select('-__v').exec()
        return res.send({...__dev, posts})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

//delete a given post 
const deletePost = async (req, res) => {
    const { postId, devId } = req.body
    if (!postId || !devId) return res.status(400).json({ message: 'All fields are required' })
    try {
        const dev = await developpers.findOne({ _id: devId }).exec()
        dev.posts.pull({ postId: postId })
        await post.findOneAndDelete({ _id: postId }).exec()
        const __dev = await dev.save()
        const _dev = await developpers.findOne({ _id: __dev._id }).select('-password -posts -__v').lean().exec()
        const posts = await post.find({ devId: __dev._id }).select('-__v').exec()
        return res.send({..._dev, posts})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'server error' })
    }
}

module.exports = {
    getAllPosts,
    createPost,
    deletePost
}

