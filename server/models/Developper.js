const mongoose = require('mongoose')

const education = new mongoose.Schema({
    school: {
        type: String,
        required: true
    },
    diploma: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

const experience = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

const post = new mongoose.Schema({
    postId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})

const socialMedia = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

const skill = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    }
})

const developper = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false,
    },
    photo: String,
    company: {
        type: String,
        required: false,
    },
    skills: [skill],
    github: {
        type: String,
        required: false,
    },
    bio: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true
    },
    socialMedias: {
        type: [socialMedia],
        required: false,
    },
    posts: {
        type: [post],
        required: false
    },
    experiences: {
        type: [experience],
        required: false
    },
    educations: {
        type: [education],
        required: false
    }
})

module.exports = mongoose.model('developper', developper)