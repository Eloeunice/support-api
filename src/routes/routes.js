import { authorizeLogin } from "../middlewares/authentication.js";
import tickets from "./tickets.js";
import { Router } from "express";

const routes = Router()

routes.post('/login', authorizeLogin)
routes.use('/tickets', tickets)

export default routes