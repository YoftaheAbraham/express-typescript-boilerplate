import dotenv from "dotenv"
dotenv.config()
import express, { Application, Request, Response } from "express"
import { HomePage } from "./controller/handler"
const app: Application = express()
const PORT = process.env.PORT || 3001;

app.get("/", HomePage)

app.listen(PORT, () => {
    console.log(`App is running at port: ${PORT}`)
})