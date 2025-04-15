// build your server here and require it from index.js
const express = require('express');
const projectsRouter = require('./project/router');
const resourcesRouter = require('./resource/router');
const tasksRouter = require('./task/router');
const server = express();

server.use(express.json());
server.use('/api/project', projectsRouter);
server.use('/api/resource', resourcesRouter);
server.use('/api/task', tasksRouter);

// server.get('*', (req, res, next) => { //eslint-disable-line
//     res.status(400).json({ message: "Nothing to see here..." });
// })

// server.use((error, req, res, next) => { //eslint-disable-line
//     res.status(500).json({ message: error.message });
// })


module.exports = server