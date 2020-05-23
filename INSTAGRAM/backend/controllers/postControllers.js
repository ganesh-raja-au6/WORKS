// Npm modules
const [mongoose, Joi, path] = [require('mongoose'), require('@hapi/joi'), require('path')]

// DB Schema
const Post = require(path.join(__dirname, "..", "models", "posts"));

// Middlewares
const {async} = require(path.join(__dirname, "..", 'middlewares', 'asyncHandler'));

exports.posts = async(async (req, res, next) => {
    const {title, body} = req.body
    if(!title || !body){
        return res.status(422).json({error : "Please fill all the fields."})
    }else{
        const schema = Joi.object({
            title : Joi.string().max(30),
            body : Joi.string().max(150)
        })
        const { error } = schema.validate({title, body})
        if(error){
            return res.status(400).json({error : error.message})
        }else{
            req.user.password = undefined
            const post = new Post({title, body, user : req.user})
            const result = await post.save()
            return res.status(200).json({message : result})
        }
    }
})

exports.getAllPosts = async(async (req, res, next) => {
    const posts = await Post.find().populate("user", "_id username fullname email")
    return res.status(200).json({message : posts})
})

exports.getUserPosts = async(async (req, res, next) => {
    const posts = await Post.find({user : req.user._id}).populate("user", "_id username fullname email")
    return res.status(200).json({message : posts})
})