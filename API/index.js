const express = require('express');
const taskRoutes = require('./tasks/routes/api_tasks');
const parser = require('body-parser');
const mongodb = require('./config/mongodb');
require('dotenv').config()
const cors = require('cors');

mongodb.connect();

const server = express();
server.use(cors());
server.listen(process.env.PORT);

server.use(parser.json());

server.use("/api/task",taskRoutes);

server.get("/",(req,res)=>{
    res.send("Hello from Express server.");
});

console.log("server is running on port "+process.env.PORT);