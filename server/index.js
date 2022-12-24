const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const multer = require('multer')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const developperRoutes = require('./routes/developper')
const postRoutes = require('./routes/posts')
const commentsRoutes = require('./routes/comments')
const skillsRouters = require('./routes/skill')
const educationRoutes = require('./routes/education')
const experienceRoutes = require('./routes/experience')
const socialMediaRoutes = require('./routes/socialMedia')
const profileRoutes = require('./routes/profile')
const githubRoutes = require('./routes/github')
const authRoutes = require('./routes/auth')
const infoRoutes = require('./routes/info')
const { application } = require('express')
require('dotenv').config()
const port = process.env.PORT
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: true,
    credentials: true,
}))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
        cb(null, true);
    } else {

        cb(null, false)
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 10
    }
})

app.use('/uploads', express.static('uploads'))
app.use('/info', infoRoutes)
app.use('/auth', authRoutes)
app.use('/github', githubRoutes)
app.use("/profile", upload.single('profile'), profileRoutes)
app.use('/social', socialMediaRoutes)
app.use('/education', educationRoutes)
app.use('/experience', experienceRoutes)
app.use('/skills', skillsRouters)
app.use('/comments', commentsRoutes)
app.use('/developpers', developperRoutes)
app.use('/posts', postRoutes)
app.use('/', (req, res) => {
    res.json({
        message: 'welcome to the site'
    })
})

mongoose.connect(process.env.MONGO)
mongoose.connection.once('open', () => {
    console.log('Connecté à mongodb');
    app.listen(port, () => {
        console.log(`server running on port ${port}`);

    })
})
