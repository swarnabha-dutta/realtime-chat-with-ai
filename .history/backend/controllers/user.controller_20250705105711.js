import userModel from "../models/user.model.js"
import userService from "../services/user.service.js";





export const createUserController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await userService.createUser(req.body);

        const token = await 
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
}