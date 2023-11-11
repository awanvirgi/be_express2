const { Todo } = require("../models")

module.exports = {
    createTodo: async (req, res) => {
        try {
            const user = req.user
            const data = req.body
            console.log(data)
            const task = await Todo.create({ title: data.title, detail: data.detail, user_id: user.id })
            if (!task) return res.status(500).json({
                message: "Todos tidak berhasil dibuat"
            })
            res.status(201).json({
                message: "Berhasil Membuat Todos",
                userId: task.user_id,
                title: task.title
            })
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Terjadi Kesalahan Internal pada server"
            })
        }
    },
    getAllTodo: async (req, res) => {
        try {
            const user = req.user
            const data = await Todo.findAll({ where: { user_id: user.id } })
            if (data.length === 0)
                return res.status(200).json({
                    message: "Tidak ada Todo"
                })
            res.status(200).json({
                message: "Berhasil menampilkan Todo",
                todos: data
            })
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Terjadi Kesalahan Internal pada server"
            })
        }
    },
    getTodobyId: async (req, res) => {
        try {
            const id = req.params.id
            const todo = await Todo.findByPk(id)

            if (!todo) {
                return res.status(404).json({
                    message: "Todo tidak ditemukan"
                });
            }
            res.status(200).json({
                message: "Berhasil menampilkan detail Todo",
                todos: todo
            })
        } catch (err) {
            console.error(err);

            res.status(500).json({
                message: "Terjadi kesalahan internal pada server"
            });
        }
    },
    editTodoById: async (req, res) => {
        try {
            const id = req.params.id
            const data = req.body
            await Todo.update({ title: data.title,detail:data.detail }, {
                where: {
                    id: id
                }
            })
            res.status(200).json({
                message: "Berhasil edit Todo",
            })
        } catch (err) {
            console.error(err);

            res.status(500).json({
                message: "Terjadi kesalahan internal pada server"
            });
        }
    },
    toggleTodo: async (req, res) => {
        try {
            const id = req.params.id
            const todo = await Todo.findByPk(id)

            if (!todo) {
                return res.status(404).json({
                    message: "Todo tidak ditemukan"
                });
            }

            let statusTodo = (todo.status === false) ? true : false
            await Todo.update({ status: statusTodo }, {
                where: {
                    id: id
                }
            })
            res.status(200).json({
                message: "Berhasil merubah status Todo",
            })
        } catch (err) {
            console.error(err);

            res.status(500).json({
                message: "Terjadi kesalahan internal pada server"
            });
        }
    },
    deleteTodobyId: async (req, res) => {
        try {
            const id = req.params.id
            await Todo.destroy({ where: { id: id } })
            res.status(200).json({
                message: "Berhasil Hapus Todo berdasarkan id",
            })
        } catch (err) {
            console.error(err);

            res.status(500).json({
                message: "Terjadi kesalahan internal pada server"
            });
        }
    },
    deleteAllTodo: async (req, res) => {
        try {
            const user = req.user
            await Todo.destroy({ where: { user_id: user.id } })
            res.status(200).json({
                message: "Berhasil Hapus Todo berdasarkan user_id",
            })
        } catch (err) {
            console.error(err);

            res.status(500).json({
                message: "Terjadi kesalahan internal pada server"
            });
        }
    },
}