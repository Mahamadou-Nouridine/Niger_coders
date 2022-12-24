const developper = require('../models/Developper')
const post = require('../models/post');

/*
@create a comment
@delete a given comment
*/

//create a new comment
const creatComment = async (req, res) => {
    const { authorId, postId, ownerId, text } = req.body
    console.log(authorId, postId, ownerId, text);
    if (!authorId || !postId || !text || !ownerId) return res.status(400).json({ message: 'All requirements are needed' })

    try {
        const _post = await post.findOne({ _id: postId }).exec()
        const _dev = await developper.findOne({ _id: _post.devId }).select('-password -posts -__v').lean().exec()
        const dev = await developper.findOne({ _id: ownerId }).select('-password -posts -__v').lean().exec()
        const author = {
            authId: authorId,
            photo: !dev.photo ?null:dev.photo,
            name:dev.name
        }
        _post.comments.push({ author: author, text: text })
        const __post = await _post.save()
        const posts = await post.find({ devId: _post.devId }).select('-__v').exec()
        return res.send({dev:{..._dev, posts}, post: __post})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

//delete a given comment
const deleteComment = async (req, res) => {
    const { commentId, postId } = req.body
    if (!commentId || !postId) return res.status(400).json({ message: 'bad request' })

    try {
        const _post = await post.findOne({ _id: postId }).exec()
        _post.comments.pull({ _id: commentId })
        const __post = await _post.save()
        const _dev = await developper.findOne({ _id: __post.devId }).select('-password -posts -__v').lean().exec()
        const posts = await post.find({ devId: __post.devId }).select('-__v').exec()
        return res.send({dev:{..._dev, posts}, post: __post})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

module.exports = {
    creatComment,
    deleteComment
}