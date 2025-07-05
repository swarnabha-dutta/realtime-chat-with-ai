import userModel from "../models/user.model.js"
import userServices from "../services/user.service.js";





export const createUserController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        
    } catch (error) {
        res.status(400).send(error.messa)
    }
}