const { nextDay } = require('date-fns')
const jwt=require('jsonwebtoken')
const verifyUser=(req, res, next)=>{
    if(!req.headers.authorization){
        let err= new Error('Authorization token is missing')
        res.status(400)
       return next(err)
    }
    token=req.headers.authorization.split(' ')[1]
    jwt.verify(token,process.env.SECRET,(err, decoded)=>{
        if (err)return next(err)

        req.user=decoded
        next()
    })


}

const verifyAdmin=(req,res,next)=>{
    if (req.user.role!='Admin'){
        let err= new Error('You are not authorized')
        res.status(403)
        return next(err)
    }
    nect()

}

const verifyManager=(req,res,nect)=>{
    if(req.user.role=='Manager'||req.user.role=='Admin'){
        return nextDay()
    }
    res.status(103)
    next(new console.Error('Not authorized'))
}

module.exports = {
    verifyUser,
    verifyAdmin,
    verifyManager
}
