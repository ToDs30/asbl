// Importe le module express et utilise sa fonction Router pour créer un routeur dédié aux tâches
const taskRouter = require('express').Router();

// Importe le contrôleur associé aux opérations sur les tâches
const taskController = require('../controllers/tasks.controller');

// Définit une route POST pour ajouter une tâche en utilisant la méthode addTasks du contrôleur
taskRouter.post('/add-task', taskController.addTasks);

// Définit une route GET pour récupérer la liste de toutes les tâches en utilisant la méthode getAll du contrôleur
taskRouter.get('/getAll', taskController.getAll);

taskRouter.delete('/delete/:id', taskController.deleteTask);

// Exporte le routeur taskRouter pour être utilisé dans d'autres fichiers
module.exports = taskRouter;

