// build your server here and require it from index.js
const express = require('express');
const projectsRouter = require('./project/router');
const resourcesRouter = require('./resource/router');
const tasksRouter = require('./task/router');
const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

// server.get('*', (req, res, next) => { //eslint-disable-line
//     res.status(400).json({ message: "Nothing to see here..." });
// })

// server.use((error, req, res, next) => { //eslint-disable-line
//     res.status(500).json({ message: error.message });
// })


module.exports = server