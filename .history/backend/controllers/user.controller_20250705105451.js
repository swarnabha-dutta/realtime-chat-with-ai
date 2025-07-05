import userModel from "../models/user.model.js"
import userServices from "../services/user.service.js";





export const createUserController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors:})
    }
}