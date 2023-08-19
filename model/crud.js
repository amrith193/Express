const mongoose = require('mongoose')
const {Schema} = mongoose
const MySchema = new Schema({
    name:{
        type : String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:Number,
        require:true,

    },
    address:{
        type:String,
        require:false
    },
    date:{
        type:Date,
        default:Date.now()
    }

})
module.exports=mongoose.model("table",MySchema)