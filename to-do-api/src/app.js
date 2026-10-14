//Creating the server
const express = require('express');
const connectDB = require('./db/db');
const taskModel = require('./models/task.model');
require('dotenv').config();
connectDB();
const app = express();
app.use(express.json());

/* POST /todos - Create a new task */
app.post('/todos', async (req, res) => {
    const data = req.body;
    await taskModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).json({ message: 'Task created successfully' });
})

/*GET /todos` - Retrieve todos */
app.get('/todos', async(req, res) => {
    //find() always gives an array of objects
    const todos = await taskModel.find();
    res.status(200).json({
        todos: todos
    })
})

app.delete('/todos/:id', async(req, res) => {
    const id = req.params.id;
    await taskModel.findByIdAndDelete({
        _id: id
    });
    res.status(200).json({
        message: 'Task deleted successfully'
    })
})

app.patch("/todos/:id", async (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    await taskModel.findByIdAndUpdate({
        _id: id
    },{
        title: title,
        description: description
    });
    res.status(200).json({
        message: 'Task updated successfully'
    })
})

module.exports = app;