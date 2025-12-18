import express from "express";
import dotenv from "dotenv";
import routes from "./src/routes/routes.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use(express.json())
app.use('/', routes)

export default app