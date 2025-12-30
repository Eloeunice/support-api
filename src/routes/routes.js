import { authorizeLogin } from "../middlewares/authentication.js";
import { registerUser } from "../controllers/register.controller.js";
import tickets from "./tickets.js";
import { Router } from "express";

const routes = Router()

routes.post('/login', authorizeLogin, (req, res) => {
    return res.status(200).json(req.user)
})
routes.use('/tickets', tickets)
routes.post('/register', registerUser)

export default routes