const mongoose=require('mongoose')

const useSchema=mangoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        minLeangth:[5,'Username should be longer than 5 characters']

    },
    password:{
        type:String,
        require:true
    },
    
},
{timestamps:true})

module.exports=mongoose.model('User',userSchema)