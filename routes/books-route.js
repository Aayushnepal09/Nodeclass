const { request } = require('express')
const express= require('express')
const router= express.Router()
const bookController=require('../controllers/books_controller')
const reviewController=require('../controllers/reviews_controller')
const { verifyUser }=require('../middleware/auth')
router.route('/')
    .get(bookController.getAllBooks)
    .post(verifyUser,bookController.createBook)
    .put(bookController.putBook)
    .delete(verifyUser,bookController.deleteBook)

router.use(verifyUser).route('/:id')
    .get(bookController.getBookById)
    .put(bookController.UpdateABookById)
    .delete(bookController.DeleteABookById)
    .post((req,res)=>{
        res.status(501).send({'reply':"not implemented"})
    })

router.route('/:id/reviews')
    .get(reviewController.getAllReviews)
    .post(reviewController.createReviews)
    .put((req, res)=>res.status(501).json({'reply':'not implemented'}))
    .delete(reviewController.deleteAllReviews)
    
router.route('/:id/reviews/:review_id')
    .get(reviewController.getReviewById)
    .post(reviewController.updateReviewById)
    .put((req, res)=>res.status(501).json({'reply':'not implemented'}))
    .delete(reviewController.deleteAReview)
module.exports=router