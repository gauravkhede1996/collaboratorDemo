const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');
router.get('/',function(req,res){
    return res.render('home',{
        user:''
    });
});
router.post('/createUser',userController.createUser);
router.post('/login',userController.logIn);
module.exports=router;