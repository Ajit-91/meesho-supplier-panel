const mongoose = require('mongoose')

const catalogSchema = new mongoose.Schema({
    creator : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    category : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    MRP : {
        type : Number,
        required : true
    },
    meeshoPrice : {
        type : Number,
        required : true
    },
    status : {
        type : String,
        default : 'processing'
    }
}, {timestamps : true})

module.exports = mongoose.model('Catalog', catalogSchema)