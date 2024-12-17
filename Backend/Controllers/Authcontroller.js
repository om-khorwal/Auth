const UserModel = require('./Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const login = async (req, res)=>{
    try{
        const {email,password}=req.body;
        const user = await UserModel.findOne({email});
        const Errormsg = 'Email or password is incorrect ';
        if(!user){
            return res.status(403)
            .json({message:Errormsg, success:false})
        }
        const passequal= await bcrypt.compare(password, user.password)
        if(!passequal){  
            return res.status(403).json({message:Errormsg, success:false})
        }
        const jwttoken = jwt.sign(
            {email:user.email, _id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:'24h'}
        )
        console.log({user})
        res.status(200).json({
                message:"Login successfully",
                success:true,
                jwttoken,
                email,
                name:user.name
            })
    } catch(err){
        res.status(500)
        .json({
            message:"Internal server error",
            success:false
        })
    }

}
const signup = async (req, res)=>{
    try{
        const {name,email,password}=req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409)
            .json({message:'User already present', success:false})
            alert('User already present')
        }
        const newUser = new UserModel({ name, email, password });
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();
        console.log({newUser})
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
}

module.exports = {
    signup,
    login
};
