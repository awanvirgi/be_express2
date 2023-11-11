const express = require("express")
const route = express.Router()
const authRoutes = require("./auth-routes")
const userRoutes = require("./user-routes")

route.get("/",(req,res)=>{
    res.json({
        message:"Selamat Datang di Express Server"
    })
})
route.use("/auth",authRoutes)
route.use("/users",userRoutes)

module.exports = route