import jwt from "jsonwebtoken";
import redisClient from "../services/user.service.js";


export const authUser = async (req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(401).send({ error: "Unauthorized User" });
    }
}