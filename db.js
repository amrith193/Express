const mongoose = require(`mongoose`)
const mongoURL ="mongodb://localhost:27017/crud"
// const mongoURL ="mongodb://127.0.0.1/crud"
const ConnectToMongo  = async()=>{
    try {
        await mongoose.connect(mongoURL)
        console.log("Connected mongo sucessfully")

        
    } catch (error) {
        console.log("Connected mongo unsucessfully",error)
        
    }
}
module.exports = ConnectToMongo