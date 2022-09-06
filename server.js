const express = require("express")
const mongoose = require('mongoose');
const {todo} = require("./dbfile")
const path = require("path")
const  app = express()
require("dotenv").config()

let today = new Date()
let PORT = process.env.PORT || 5000

const uri = "mongodb+srv://gama225:poploploplop12@cluster0.o3ppycj.mongodb.net/?retryWrites=true&w=majority"

app.use(express.static(path.join(__dirname + "/public")))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/getalltasks", async (req, res) => {
    let alltasks = await todo.find({}).sort({time: 1})
    res.json(alltasks)
})

app.post("/addtask", (req, res) => {
    let {task} = req.body

    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    todo.insertMany({time: time, date: date, "task": task, done: false})
    res.redirect("/")
})

app.put("/donetask", async (req, res) => {
    let {time, date, task, done} = req.body
    let found = await todo.findOne({task: task})
    let upped = await todo.updateOne({task: task}, {$set: {done: done}})
    res.json({"donecheck": true})
})

app.delete("/deletetask", async (req, res) => {
    let {task} = req.body
    const del = await todo.deleteMany({task: task})
    res.json({"deleted": true})
})

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("*", (req, res) => {
    res.send("Error")
})

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connected to the Database.")
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    })
})