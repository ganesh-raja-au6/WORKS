// Npm modules
const [mongoose, path] = [require('mongoose'), require('path')]
const {verify} = require('jsonwebtoken')

// DB Schema
const User = require(path.join(__dirname, "..", "models", "users"));

exports.authorized = async (req, res, next) => {
    const {authorization} = req.headers
    if(!authorization){
        return res.status(403).json({error : 'You are not authorized.'})
    }else{
        const token = authorization.replace('Bearer ', '')
        verify(token, process.env.JWTSECRET, (err, payload) => {
            if(err){
                return res.status(403).json({error : "You are not authorized."})
            }else{
                const {_id} = payload
                User.findById(_id).then((user) => {
                    req.user = user
                    next()
                })
            }
        })
    }
}