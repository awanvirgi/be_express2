const express = require("express")
const { createTodo, getAllTodo, getTodobyId, editTodoById, toggleTodo, deleteTodobyId, deleteAllTodo } = require("../controllers/todo-controllers")
const route = express.Router()

route.get("/",getAllTodo)
route.get("/:id",getTodobyId)
route.post("/",createTodo)
route.patch("/:id",editTodoById)
route.patch("/:id/toggle",toggleTodo)
route.delete("/:id",deleteTodobyId)
route.delete("/",deleteAllTodo)

module.exports = route