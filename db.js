const mongoose = require('mongoose')
const mongourl = 'mongodb://localhost:27017/product'
// function mongooseConnect to connect to the database url
const mongooseConnect = () =>{
    mongoose.connect(mongourl).then(()=>{
    console.log("connected successfully to the backend");
})
}


module.exports= mongooseConnect;