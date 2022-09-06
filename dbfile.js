const mongoose = require('mongoose');
const Schema = mongoose.Schema


const todoSchema = new Schema({
    time: String,
    date: String,
    task: String,
    done: Boolean
})

const todo = mongoose.model('todo', todoSchema)
module.exports = {todo}