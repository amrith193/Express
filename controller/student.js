const { param } = require('../Router/studRoute')
const studentSchema = require('../model/studentSchema')
const StudentSchema =require('../model/studentSchema')
const Insert = async(req,res)=>{
try {
    const {name,email,phone,address,age}=req.body
    let checkphone = await StudentSchema.findOne({phone})
    if (checkphone) {
        console.log("phone number already exists try with another number")
        return res.status(404).json({error:"phone number already exists"})
    } else {
        
    const data =await new StudentSchema({name,email,phone,address,age})
    const saveStudent=await data.save()
    console.log("inserted sucessfuly")
    res.send({"inserted sucessfdully":true,saveStudent})
    }

} catch (error) {
    console.error("internal server error",error)
    res.status(500).json("some internal error")
}
}
const View = async (req,res)=>{
    try {
        const data = await StudentSchema.find()
        
        res.json(data)

    } catch (error) {
    console.error("internal server error",error)
    res.status(500).json("some internal error")
    }
}
const Update = async (req,res)=>{
    const {name,email,phone,designation ,salary,address}=req.body
    try {
        const newdata={}
        if (name)[newdata.name=name]
        if (email)[newdata.email=email]
        if (phone)[newdata.phone=phone]
        if (designation)[newdata.designation=designation]
        if (salary)[newdata.salary=salary]
        if (address)[newdata.address=address]
        let data =await studentSchema.findById(req.params.id)
        if (!data){
            console.log("data is not found")
            return res.status(404).send("data not exists")

        }else{
            data =await studentSchema.findByIdAndUpdate(req.params.id,{$set:newdata})
            console.log("data updated sucessfully")
            res.json({"sucess":"sucessfully","update data":data})
        }

    } catch (error) {
        console.log("Error ocuured",error)
        res.status(500).json("some error ocures")
    }
}
const Delete = async(req,res)=>{
    try {
        let data = await StudentSchema.findById(req.params.id)
        if(!data){
            console.log("data is not found")
            return res.status(404).send("data not exists")
        }else{
            data = await StudentSchema.findByIdAndDelete(req.params.id)
            console.log("data deleted sucessfully")
            res.json({"sucess":"deleted sucessfully","deleted data":data})
        }
    } catch (error) {
        console.error("internal server error",error)
    res.status(500).json("some internal error")
    }
}
const Register = async(req ,res)=>{
    try {
        const {name,email,password}=req.body
        let data =await StudentSchema.findOne({email})
        if (data) {
            console.log("email already exists")
            return res.status(404).json({error:"email exists"})
        } else {
            const data1 =await new StudentSchema({name,email,password})
            const save  = await data1.save()
            console.log("register sucessfully")
            console.log("register sucessfully")
            res.send({"register sucessfdully":true,save})
        }
        
        
    } catch (error) {
        console.error("internal server error",error)
        res.status(500).json("some internal error")
    }
}
module.exports= {Insert,View,Delete,Update,Register};