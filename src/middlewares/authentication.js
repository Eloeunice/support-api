import { prisma } from "../controllers/ticket.controller.js";


export async function authorizeLogin(req, res, next) {
    const { name, password } = req.body

    const user = await prisma.user.findUnique({ where: { name: name } })

    if (user && user.password === password) {
        req.user = user
        next()
    } else {
        return res.status(401).json({ message: "Usuário não autorizado" })
    }
}