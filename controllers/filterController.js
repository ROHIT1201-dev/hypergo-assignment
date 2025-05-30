import { Property } from "../models/Property.js";
import {  filters } from "../utils/filters.js";


export const filterProperties = async (req, res) => {
    try {
        const filter = filters(req.query);
        const listings= await Property.find(filter);
        console.log(listings);
        res.json(listings);
    } catch (err) {
        console.error('Filter error:', error);
        
        res.status(500).json({ error: 'Server error' });
        
    }





}