const benevolesRouter = require('express').Router();

const benevolesController = require('../controllers/benevole.controller');

benevolesRouter.post('/add-benevole', benevolesController.addBenevole);

benevolesRouter.get('/getAll', benevolesController.getAll);

benevolesRouter.delete('/delete/:id', benevolesController.deleteBenevole);

module.exports = benevolesRouter;


