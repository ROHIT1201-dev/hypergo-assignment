import { Property } from "../models/Property.js";
import redisClient from "../config/redisClient.js";

const PROPERTIES_CACHE_KEY = 'properties:all'

export const createProperty = async (req, res) => {
  try {
    const property = await Property.create({ ...req.body, createdBy: req.user.id });

    await redisClient.del(PROPERTIES_CACHE_KEY)
    res.status(201).json(property);
  } catch (err) {
    console.
    res.status(500).json({ message: err.message });
  }
};

export const getProperties = async (req, res) => {
  try {

    const cached= await redisClient.get(PROPERTIES_CACHE_KEY);

    if(cached){
      console.log("cache hit");
      return res.json(JSON.parse(cached))
    }

    

    // console.log(req.body);
    const properties = await Property.find();
    // console.log(properties);
    await redisClient.set(PROPERTIES_CACHE_KEY,JSON.stringify(properties),'EX', 3600)
    res.json(properties);
  } catch (err) {
    console.log("errrrrrr",err)
    res.status(500).json({ message: err.message });
  }
};

export const updateProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ message: 'Property not found' });
    if (!req.user || !req.user.id || !property.createdBy || property.createdBy.toString() !== req.user.id)
      return res.status(403).json({ message: 'Unauthorized' });

    Object.assign(property, req.body);
    const updated = await property.save();
    await redisClient.del(PROPERTIES_CACHE_KEY);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteProperty = async (req, res) => {
  try {
      console.log(req.params.id);
      console.log(req.user._id); 
    const property = await Property.findById(req.params.id);
    
    if (!property) return res.status(404).json({ message: 'Property not found' });
    if (!req.user || !req.user.id || !property.createdBy || property.createdBy.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Unauthorized' });
}


    await property.deleteOne(property);
    await redisClient.del(PROPERTIES_CACHE_KEY);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
