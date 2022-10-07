const { Router } = require('express');
const User =  require('../modules/User')
const authRouter = Router();
authRouter.post('/signup',(req,res)=>{
    const user = new User(...req.body);
    user.save((err,success)=>{
        if(err){
            return res.status(500).send({message:'Error'})
        }
        else{
            return res.status(201).send({message:'succefull',token:'12345'})
        }
    })
});
authRouter.post('/login',(req,res)=>{
    const{username,pass} = req.body;
    const validUser = User.find({username,pass});
    return res.send(validUser);
});
module.exports= authRouter;