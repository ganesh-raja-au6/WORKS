const mongoose = require('mongoose')

const schema = mongoose.Schema({
    url : String,
    fullurl : String,
    shorturl : String,
    date : {type: String, default:Date.now }
})

module.exports = mongoose.model('Url', schema)