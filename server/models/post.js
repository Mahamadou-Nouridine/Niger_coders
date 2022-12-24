const mongoose = require('mongoose')

const author =  new mongoose.Schema({
    authId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    photo:{
        type: String,
        required: false
    },
    name:{
        type: String,
        required: true
    }
})

const comment = new mongoose.Schema({
    author :{
        type: author,
        required:true
    },
    text:{
        type: String,
        required: true
    }
})

const post = new mongoose.Schema({
    devName: {
        type: String,
        required:true
    },
    devPhoto: {
        type: String,
        required:false
    },
    devId: {
        type: String,
        required: false
    },
    text:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    comments: {
        type: [comment],
        required: false
    }
})

module.exports = mongoose.model('post', post)