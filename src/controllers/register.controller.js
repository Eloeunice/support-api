import prisma from "../database/prisma.js"

export async function registerUser(req, res) {
    const { name, password } = req.body

    // 1️⃣ validação básica
    if (!name || !password) {
        return res.status(400).json({
            message: "Name and password are required"
        })
    }

    // 2️⃣ verifica se já existe usuário com o mesmo nome
    const userAlreadyExists = await prisma.user.findUnique({
        where: { name }
    })

    if (userAlreadyExists) {
        return res.status(409).json({
            message: "User already exists"
        })
    }

    // 3️⃣ cria o usuário
    const user = await prisma.user.create({
        data: {
            name,
            password
        }
    })

    return res.status(201).json(user)
}
