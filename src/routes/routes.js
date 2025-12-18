import { authorizeLogin } from "../middlewares/authentication.js";
import tickets from "./createTickets.js";
import { Router } from "express";

const routes = Router()

routes.use('/tickets', tickets)

export default routes