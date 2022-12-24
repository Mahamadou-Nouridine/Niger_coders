const bcrypt = require('bcrypt')
const developper = require('../models/Developper')
const post = require('../models/post')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise


//create a new developper
const createDev = async (req, res) => {
    const { name, password, email } = req.body;
    //check if infos are correct
    if (!name || !password || !email) return res.status(400).json({ message: "Remplissez tous les champs" })

    
        //check dupplicate
        const allDev =  await developper.find({}).select('name').exec();
        if(!allDev) return res.status(400).json({message:"no developper found"})
        console.log(allDev)
        for (let dev of allDev){
            if(dev.name.match(new RegExp(name, 'i'))){
                console.log('found')
                return res.status(409).json({ message: "Developper already exist" })
                break
            }
        }
        // allDev.forEach((dev)=>{
            
        // })
        // const dup = await developper.findOne({ 'name': name }).select('-password')
        // if (dup) 
        // hash password
        const hashedpwd = await bcrypt.hash(password, 10)
        //create and save the new developper
        const newDev = { name, password: hashedpwd, email }
        const _dev = await developper.create(newDev)
        if(!_dev) return res.status(500).json({message:"Server Error"})
        const dev = await developper.findOne({ _id: _dev._id }).select('-password -posts -__v').lean().exec()
        if(!dev) return res.status(500).json({message:"Server Error"})
        const posts = await post.find({ devId: _dev._id }).select('-__v').exec()
        return res.send({...dev, posts})
   
}

const getAllDev = async (req, res) => {
    try {
        const developpers = await developper.find({}).select('-password -posts -__v').lean().exec()
        let _developpers = [];
        for (let developper of developpers) {
            const posts = await post.find({ devId: developper._id }).exec()
            const dev = {
                ...developper,
                posts
            }
            _developpers.push(dev)
        }
        await res.send(_developpers)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }

}

//get one dev
const getOneDev = async (req, res) => {
    console.log(req.params);
    console.log('in');
    const { name } = req.params
    if (!name) return res.status(400).json({ message: 'All fields are required' })
    try {
        const dev = await developper.findOne({ name }).select('-password -posts -__v').lean().exec()
        const posts = await post.find({ devId: dev._id }).select('-__v').exec()
        return res.send({ ...dev, posts })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

const deleteDev = async (req, res) => {
    const { id } = req.body
    if (!id) return res.status(400).json({ message: 'Id is required' })

    try {
        //check if the developper exist
        const dev = await developper.findById(id).select('-password').exec()
        const deleted = await developper.findByIdAndDelete(id)
        return res.json({ message: `${deleted.name} Account deleted` })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' })
    }
}

module.exports = {
    getAllDev,
    createDev,
    deleteDev,
    getOneDev
}