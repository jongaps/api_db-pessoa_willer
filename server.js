import express from "express"
import { pool } from "./db.js"

const app = express()
app.use(express.json())

const PORT = 3000;

app.listen(PORT, () => {
    console.log("API rodando!!!")
})