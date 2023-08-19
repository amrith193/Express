const mongoose = require('mongoose')
const {Schema} = mongoose
const StudentSchema = new Schema({
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
    password:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:false
    },
    age:{
        type:Number,

    },
    date:{
        type:Date,
        default:Date.now()
    }

})
module.exports=mongoose.model("student",StudentSchema)