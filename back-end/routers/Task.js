const taskRouter = require('express').Router();
const taskController = require('../controllers/tasks.controller');


//Route pour ajouter une tâche
taskRouter.post('/add-task', taskController.addTasks);

//Route pour la liste de tâches
taskRouter.get('/getAll', taskController.getAll);

  module.exports=taskRouter;