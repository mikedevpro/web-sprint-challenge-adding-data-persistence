// build your `/api/tasks` router here
const express = require('express')

const router = express.Router();

const {
  getTasks,
  insertTask
} = require('./model')


router.get("/", (req, res, next) => {
  getTasks()
    .then(projects => {
      res.json(projects);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  insertTask(req.body)
  .then(task => {
    res.status(201).json(task);
  })
  .catch(next)
})

// router.post("/", async (req, res) => {
//   try {
//     const { task_description, task_notes, task_completed, project_id } = req.body;

//     if (!task_description) {
//       return res.status(400).json({ message: "Task description is required." });
//     }
//     if(!project_id) {
//       return res.status(400).json({ message: "Project ID is required." });
//     }
//     const [task_id] = await db("tasks")
//       .insert({
//         task_description,
//         task_notes,
//         task_completed: task_completed ? 1 : 0,
//         project_id,
//     });

//     const task = await db("tasks").where({ task_id }).first();

//     task.task_completed = !!task.task_completed;

//     res.status(201).json(task);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.use((err, req, res, next) => { //eslint-disable-line
//   res.status(500).json({
//     customMessage: "Problem from Task router",
//     message: err.message,
//     stack: err.stack,
//   });
// });


module.exports = router;
