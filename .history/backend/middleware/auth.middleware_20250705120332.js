import jwt from "jsonwebtoken";
import redisClient from "../services/user.service.js";


export const authUser = async