// build your `Task` model here
const db = require('../../data/dbConfig');


function getAll() {
  return db('tasks as ts')
  .leftJoin(
    'projects as pr',
    'ts.project_id',
    'pr.project_id'
  )
  .select(
    'ts.*',
    'pr.project_name',
    'pr.project_description'
  )
  .then(rows => {
    rows.forEach(row => {
      row.task_completed = Boolean(row.task_completed);
    });
    return rows;
  });
}

function insert(task){
  return db('tasks')
    .insert(task)
    .then(task_id => {
      return db('tasks').where('task_id', task_id[0])
        .then(result => {
          result[0].task_completed = Boolean(result[0].task_completed)
          return result[0]
        })
    })
}
// const getTaskById = async (task_id) => {
//   const result = await db('tasks')
//     .where({ task_id })
//     .first();
//   result.task_completed = 
//     Boolean(result.task_completed);
//   return result;
// }

// const getTasks = async () => {
//   const data = await db('tasks as t')
//     .innerJoin('project as p', 't.project_id', 'p.project_id')
//     .select('t*', 'project_name', 'project_description');
//   const result = data.map(item => {
//     return {
//       ...item,
//       task_completed: Boolean(item.task_completed)
//     }
//   });
//   return result;
// }

// const insertTask = async (task) => { 
//   const task_id = await db('tasks')
//     .insert(task);
//   const result = await getTaskById(task_id);
//   return result;
// }

module.exports = {
  getAll,
  insert
}
