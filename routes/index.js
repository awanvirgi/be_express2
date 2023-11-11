const express = require("express")
const route = express.Router()
const authRoutes = require("./auth-routes")

route.get("/",(req,res)=>{
    res.json({
        message:"Selamat Datang di Express Server"
    })
})
route.use("/users",authRoutes)

module.exports = route