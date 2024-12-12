const { signup } = require('../Controllers/Authcontroller');
const { signupvalidatation } = require('../Middlewares/Authvalidation');

const router = require('express').Router();
router.post('/login', (req, res)=>{
})

router.post('/signup',async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        const user = await UserModel.findone({email});
        if(user){
            return res.status(409)
            .json({message:'User already present', success:false})
        }
        UserModel = new UserModel({name,email,password});
        UserModel.password = await bcrypt.hash(password,10);
        await UserModel.save();
        console.log(UserModel)
        res.status(201)
            .json({
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