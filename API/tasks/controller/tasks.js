const Task = require("../model/Task");
const repo = require("../repositories/tasks");

exports.addTask = (req,res)=>{
    const newTask = new Task(null,req.body.title,req.body.description,req.body.status);
    repo.add(newTask, ()=>{
        res.send("Data received !!");
    });
}

exports.getTask = (req,res)=>{
    repo.show((data)=>{
        res.send(data);
    });
}

exports.deleteTask = (req,res)=>{
    const id = req.params.id;
    repo.deleteById(id,(data)=>{
        res.send(data);
    })
}

exports.updateTask = (req,res)=>{
    const newUpdate = new Task(req.body.id,req.body.title,req.body.description,req.body.status);
    repo.updateById(newUpdate,()=>{
        res.send("Data Updated")
    })
}

exports.updateStatus = (req,res)=>{
    const id = req.body.id;
    const status = req.body.status;
    repo.updateStatusById(id,status,()=>{
        res.send("Status Updated")
    })
}

