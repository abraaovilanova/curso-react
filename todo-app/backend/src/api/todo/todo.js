const restful = require('node-restful') //Cria uma casta em cima do mongoose
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    descripition: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }

})

module.exports = restful.model('Todo', todoSchema)