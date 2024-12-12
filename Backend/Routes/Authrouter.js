const router = require('express').Router();
const UserModel = require('../Models/User');
const bcrypt = require('bcrypt');

router.post('/login', (req, res)=>{
})

router.post('/signup',async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409)
            .json({message:'User already present', success:false})
        }
        const newUser = new UserModel({ name, email, password });
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();
        console.log(newUser)
        res.status(201).json({
                message:"signup successfully",
                success:true
            })
    } catch(err){
        res.status(500)
        .json({
            message:"Internal server error",
            success:false
        })
    }
})

module.exports = router;