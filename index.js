require('dotenv').config()

const express = require("express")
const bodyParser = require("body-parser")
const user = require("./routes/user")
const InitiateMongoServer = require("./config/db")

InitiateMongoServer()

const app = express()

const PORT = process.env.PORT || 4000

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.json({ message: "API route '/' called"})
})

app.use("/user", user)

app.listen(PORT, (req, res) => {
    console.log (`Server running on Port ${PORT}`)
})