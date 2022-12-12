const mongoose =  require("mongoose")
const Category = require("./category")

const reviewschema = mongoose.Schema({
    body :{
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now,


    }
})

const bookSchema =  mongoose.Schema({
    title : {
        type : String,
        required: true,
    },

    author : {
        type : String,
        required  : true,

    },
    
    reviews : [reviewschema],
    category:{
        type:mongoose.Schema.Types.ObjectId,
    }
},
    {timestamps:true})

module.exports = mongoose.model('Book',bookSchema)