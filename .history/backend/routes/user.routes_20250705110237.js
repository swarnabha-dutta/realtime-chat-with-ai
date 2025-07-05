import { Router } from "express";
import * as userController from '../controllers/user.controller.js';
import { body } from "express-validator";


const router = Router();


router. post('/register',
    
    
    
    
    userController.createUserController);




export default router;