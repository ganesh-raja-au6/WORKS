const [mongoose] = [require('mongoose')]

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },body : {
        type : String,
        required : true
    },image : {
        type : String,
        default : 'No Image'
    },user : {
        type : mongoose.Types.ObjectId,
        ref : 'User'
    }
},{
    createdAt : 'createdAt',
    updatedAt : 'updatedAt'
})

module.exports = mongoose.model('Post', postSchema)