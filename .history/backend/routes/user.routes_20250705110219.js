import { Router } from "express";
import * as userController from '../controllers/user.controller.js';
import {body} from "expr"


const router = Router();


router.post('/register', userController.createUserController);




export default router;