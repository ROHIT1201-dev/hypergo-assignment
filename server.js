import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import authRoutes from "./routes/authRoutes.js"
import favoritesRoutes from "./routes/favoritesRoutes.js";
import propertyFilters from "./routes/propertyFilters.js"
import recommendedRoutes from "./routes/recommendedRoutes.js"


dotenv.config();


const app=express();
app.use(express.json());
connectDB();


app.use('/api/auth',authRoutes);
app.use('/api/properties',propertyRoutes);
app.use("/api/user", favoritesRoutes);
app.use("/api/property", propertyFilters);
app.use("/api/user/recommend",recommendedRoutes);

const PORT=process.env.PORT || 5000 ;


app.listen(PORT,() =>  console.log(`Server running on port ${PORT}`));