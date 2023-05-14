const User=require('../models/userSchema');

module.exports.createUser=async function (req,res){
    console.log(req.body);
    try{
    let user=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    if(user){
        return res.render('profile',{
            user:user[0]
        });
    }
    }catch(err){
        if(err){
            console.log("Error",err);
            return;
        }
    }
    
}
module.exports.logIn= async function(req,res){
    let user= await User.find({email:req.body.email});
    if(user.length>0){
        return res.render('profile',{
            user:user[0]
        });
    }else{
        console.log("Unable to find User");
    }
}