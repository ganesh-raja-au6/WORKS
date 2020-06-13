const mongoose = require('mongoose')

const schema = mongoose.Schema({
    email : String,
    username : String,
    password : String,
    secretToken : String,
    isVerified : Boolean
},{
    timestamps : {
        createdAt : 'createdAt',
        updatedAt : 'updatedAt'
    }
})

module.exports = mongoose.model('user', schema)