const express = require("express")
const { registUser, loginUser } = require("../controllers/auth-controllers")
const route = express.Router()

route.post("/regist",registUser)
route.post("/login",loginUser)

module.exports = route