import bodyParser from "body-parser"
import compression from "compression"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import http from "http"
import mongoose from "mongoose"
import router from "./router"

const app = express()
dotenv.config()

app.use(
  cors({
    credentials: true,
  })
)

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080")
})

mongoose.Promise = Promise
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.on("error", (error) => console.log(error))

app.use("/", router())
