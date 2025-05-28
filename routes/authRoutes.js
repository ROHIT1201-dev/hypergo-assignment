import express from "express";
import { loginUser,registeredUser } from "../controllers/authController.js";

const router = express.Router();

router.post('/register',registeredUser);
router.post('/login',loginUser);


export default router;


