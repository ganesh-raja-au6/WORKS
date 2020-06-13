const [mongoose] = [require("mongoose")];

require('./db')

const schema = new mongoose.Schema({
    fname : {
        type : String,
        require : true
    },lname : {
        type : String,
        require : true
    },email : {
        type : String,
        require : true
    },password : {
        type : String,
        require : true
    }
})

let user = new mongoose.model('user', schema)

module.exports = user