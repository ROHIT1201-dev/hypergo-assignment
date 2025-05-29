import {User} from "../models/User.js"
import { Property } from "../models/Property.js"
import mongoose from "mongoose";


export const addFavorites = async (req ,res) => {
    try {
        const user = await  User.findById(req.user.id);
        console.log(user);
        const propertyId=req.params.id;
        console.log(propertyId);
       
        

        if(!user.Favorites.includes(propertyId)){
            console.log("Adding to favorites");
            user.Favorites.push(propertyId);
            await user.save();
        }
        

        res.status(201).json({message : "Property added to favorites"});
    } catch (err) {
        res.status(500).json({message:err.message})
    }
}


export const getFavorites = async (req, res) => {
    try {
        const user = await User.findById({_id:req.user.id});
        console.log(user.Favorites);
        res.json(user.Favorites);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


export const deleteFavorites = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const propertyId = req.params.id;

        if(!user.Favorites.includes(propertyId)){
            res.json({message: "Property does not exist"});
        }
        user.Favorites =user.Favorites.filter((favId) => {
            favId.toString() !== propertyId
        })

        await user.save()

        res.json({ message: "Property removed from favorites" });
    } catch (err) {

        res.status(500).json({ message: err.message });
    }
}