const express = require('express')
const ConnectToMongo =require('./db')
const MySchema =require('./model/crud');
const studentSchema = require('./model/studentSchema');


const app = express();
app.use(express.json())
port=7000

app.use('/api/student',require('./Router/studRoute'))

app.get('/first',(req,res)=>{
    console.log("first api is called")
    res.send('first api call')
})

app.post('/api/insert',async(req,res)=>{
try {
    const { name,email,phone,address}= req.body;
    const data = new MySchema({name,email,phone,address})
    const saveData = await data.save()
    console.log("Inserted sucessfully")
    res.send({"Inserted sucessfully":true,saveData})
} catch (error) {
    console.error("Internal error",error)
    res.status(500).json("some internal error")
}
})



// Hello()
// name("a")
// add()   
// sub()
// mul()
ConnectToMongo()
// MySchema()

app.listen(port,()=>{
    console.log('Api is listening port '+port)
})
