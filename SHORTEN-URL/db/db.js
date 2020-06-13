const mongoose = require('mongoose')

const dbconnect = async () => {
    try{
        await mongoose.connect(process.env.MONGODBURI, {useNewUrlParser : true, useUnifiedTopology : true})
        console.log('DB connected successfully')
    }catch(err){
        console.log(err.message)
    }
}

module.exports = dbconnect()