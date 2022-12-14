const category = require('../models/category')
const Category=require('../models/category')

const getallCategory=(req,res,next)=>{
    Category.find()
    .then((categorie)=>{
        res.json(books)
    }).catch(
        (err) =>{
            next(err)
        }
    )

}

const createCategory=(req,res,next)=>{
    let abook = {
        "name" : req.body.title,
        "books" : req.body.author
    }
    Category.create(req.body)
    .then (category=>req.status(201).json(category))
    .catch(next)


}

const deleteCategory= (req,res,next) =>{
    Category.deleteMany()
    .then(reply=>res.json(reply))
    .catch(next)

}

const getallCategoryById=(req,res,next) =>{
    category.findById(req.params.caegory_id)
    .populate('books')
    .then(category=>res.json(category))
    .catch(next)


}
const updateallCategoryById=(req,res,next) =>{

    Category.findByIdAndUpdate(req.params.category_id,{$set:req.body},{new:true})
    .then(category=>res.json(category))
    .catch(next)

}
const deleteCategoryById=(req,res,next) =>{
    Category.findByIdAndDelete(req,params,category_id)
    .then(category=>req.json(category))
    .catch(next)

}


module.exports={
    getallCategory,
    createCategory,
    deleteCategory,
    getallCategoryById,
    deleteCategoryById
}
