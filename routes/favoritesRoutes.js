import express from "express";
import { getFavorites,deleteFavorites,addFavorites } from "../controllers/favoritesController.js";
import { protect } from "../middlewares/authMiddleware.js";


const router=express.Router();

router.get("/favorites",protect,getFavorites);
router.post("/favorites/:id",protect,addFavorites);
router.delete("/favorites/:id",protect,deleteFavorites);


export default router;