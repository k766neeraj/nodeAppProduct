const mongoose = require('mongoose')

// creating schema named itemschema for the product
const itemschema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    leftitem:{
        type:Number,
        require:true
    }
})

// creating a modal of the itemschema
const Prod = mongoose.model('item',itemschema)

module.exports = Prod