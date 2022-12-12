const mongoose=require('mongoose')

const categoryScahema=mongoose.Schema({
    name:{
        type: String,
    require:[true,'Category name is required']
},
books:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Book'}]

})

module.exports=mongoose.model('Category',categoryScahema)