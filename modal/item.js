const mongoose = require('mongoose')

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

const Prod = mongoose.model('item',itemschema)

module.exports = Prod