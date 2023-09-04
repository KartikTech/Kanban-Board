const express = require('express');
const controller = require('../controller/tasks')

const router = express.Router();

router.post('/',controller.addTask);

router.post('/delete/:id',controller.deleteTask);

router.post('/update',controller.updateTask);

router.post('/status',controller.updateStatus);

router.get('/',controller.getTask);

module.exports= router;