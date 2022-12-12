const express =  require('express')
const categorieController=require('../contollers/categories_controller')

const router=express.Router()

router.route('/')
.get()
.post()
.put((req,res )=>{ res.status(501).json({"reply": "Method not supported"})})
.delete()

router.route('/:caegory_id')
.get()
.post()
.put((req,res )=>{ res.status(501).json({"reply": "Method not supported"})})
.delete()