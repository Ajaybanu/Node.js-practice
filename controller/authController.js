import userModel from "../model/userModel.js";
import JWT from "jsonwebtoken"

import { comparePassword,hashpassword } from "../helper/authHelper.js";

export const registerController = async(req,res)=>{
    try {
        const { name,email,password,phone } = req.body;
        //validation
        if (!name) {
            return res.send({message: "Name is Required"});
        }
        if (!email) {
            return  res.send({message:"Message is Required"});
        }
        if(!password){
            return res.send({message : "Password is Required"})
        }
        if(!phone){
            return res.send({message:"Number is Required"})
        }

        const exisitingUser = await userModel.findOne({ email });
             if(exisitingUser){
                return res.status(200).send({
                    success: false,
                    message:"Already Register Please login"
                })
             }

             //register user
             const hashedpassword = await hashpassword(password);
             //save
             const user = await new userModel({
                name,
                email,
                phone,
                password:hashedpassword
             }).save();

             res.status(201).send({
                success:true,
                message:"User Register Successfully",
                user,
             })
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error is Registeration",
            error,
        })
        
    }
}

//post login 
export const loginController = async(req,res)=>{
    try {
        const {email, password} = req.body;
        //validation
        if(!email || ! password){
            return res.status(404).send({
                success: false,
                message: "Invalid email or password"
            })
        }
        const match = await comparePassword(password,user.password);
        if(!match){
            return res.status(200).send({
                success: false,
                message: "Invalid password",
            })
        }

// token 
const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{
    expiresIn:"7d",
});
res.status(200).send({
    success:true,
    message:"login successfully",
    user:{
        _id: user._id,
        name: user.name,
        email:user.email,
        phone:user.phoen,   
    },
    token,
})

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in login ",
            error,
        })
    }
}