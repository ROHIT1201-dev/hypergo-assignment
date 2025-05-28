import bcrypt from "bcryptjs";
import { User } from "../models/User.js";
import {generateTokens}  from "../utils/generateTokens.js";

export const registeredUser = async (req , res ) => {
    const {name, email, password} = req.body;

    const exist= await User.findOne({email});
    if(exist){
        res.status(400).json({message:"Already exists"});

    }

    const hashed= await bcrypt.hash(password,10);
    const user= await User.create({name,email,password:hashed});


    res.status(201).json(
        {
            _id:user._id,
            name:user.name,
            email:user.email,
            token:generateTokens(user._id)
        }
    )
}


export const loginUser = async (req, res) => {
    const {email,password}=req.body;

    const user= await User.findOne({email});

    if(!user || !(await bcrypt.compare(password,user.password))){
        res.status(401).json({message: "Invalid credentials"});
    }


    res.json({
        _id:user._id,
        name:user.name,
        email:email.password,
        token:generateTokens(user._id)
        
    })


}