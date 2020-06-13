const mongoose = require("mongoose");

const User = require('../models/users')
module.exports = async (req, res, next)=>{
    const user = await User.findOne({_id : req.session.userId})
    console.log(user)
    if(!user){
        req.flash('error', 'No valid token exists')
        res.redirect('/users/login')
    }else{
        if(user.isVerified === true){
            next()
        }else{
            req.flash('error', 'Email verification pending')
            res.redirect('/users/login')
        }
    }
}