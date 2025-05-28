import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import propertyRoutes from "./routes/propertyRoutes.js";


dotenv.config();


const app=express();
app.use(express.json());
connectDB();

app.use('/api/properties',propertyRoutes);

const PORT=process.env.PORT || 5000 ;


app.listen(PORT,() =>  console.log(`Server running on port ${PORT}`));