const mongoose = require('mongoose')
const mongourl = 'mongodb://localhost:27017/product'

const mongooseConnect = () =>{
    mongoose.connect(mongourl).then(()=>{
    console.log("connected successfully to the backend");
})
}


module.exports= mongooseConnect;