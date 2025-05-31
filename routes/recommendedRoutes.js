import express from "express";
import { getRecommendations,recommendedProperty } from "../controllers/recommendedController.js";
import {protect} from "../middlewares/authMiddleware.js"


const router = express.Router();


router.post('/', protect, recommendedProperty);
router.get('/received', protect, getRecommendations);
export default router;
