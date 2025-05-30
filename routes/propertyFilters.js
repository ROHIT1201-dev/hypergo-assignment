import express from "express";

import { protect } from '../middlewares/authMiddleware.js';
import { filterProperties} from "../controllers/filterController.js";

const router = express.Router();

router.get("/filter",protect,filterProperties);

export default router;