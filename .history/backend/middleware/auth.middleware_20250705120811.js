import jwt from "jsonwebtoken";
import redisClient from "../services/user.service.js";


export const authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).send({ error: 'Unauthorized User or Token is Expired or token not getting' });
        }

        const isBlackList = await redisClient 

    } catch (error) {
        console.log(error);
        res.status(401).send({ error: "Unauthorized User,middleware Denied" });
    }
}