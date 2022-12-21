const { hash } = require('bcrypt')
const express=require('express')
const { model } = require('mongoose')
const User = require('../models/User') 
const { use } = require('./books-router')
const bcrypt=express.Router('bcryptjs')

const router =express.Router()


router.post('/register',(req,res,next)=>{
    User.findOne({username:req.body.username}
        .then(user=>{
            if(user != null){
                let err=new Error(`User ${req.body.username}already exists.`)
               return next(new (err))
            }
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                if (err)return next(err)
                let user=new User()
                user.username=req.body.username,
                user.password=hash
                if(req.body.role)user.role=req.body.role
                user.save
                .then(user=>{
                    res.status(201).json({
                        'statue':'User Registered Sucessfully',
                        userId:user._id,
                        username:user.username,
                        role:user.role

                    })
                }).catch(next)
            })

        }).catch(next)
    )

})


router.post('/login',(req,res,next)=>{
    User.findOne({username:req.body.username})
    .then (user=> {
        if (user==null){
        let err=new err (`User ${req.body.username} has not been registered`)
        return next(err)
    }
    bcrypt.compare(req.body.password,user.password,(err,status)=>{
        if (err)return next(err)
        if(!status){
            let err = new Error ('password dooes now match.')
        }
    }

    
    )
})

})

model.exports=router

