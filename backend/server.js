import express from "express"
import cors from "cors"
import users from "./api/users.routes.js"
import rentals from "./api/rentals.routes.js"

const app = express(); 

app.use(cors())
app.use(express.json())

app.use("/api/v1/users", users)
app.use("/api/v1/rentals", rentals)
app.use("*", (req, res) => res.status(404).json({ error: "route not found!"}))

export default app