const express = require("express")
const tokenVerify = require("../middleware/auth")
const todosRoutes = require("./todos-routes")
const route = express.Router()

route.use("/todos",tokenVerify,todosRoutes)

module.exports = route