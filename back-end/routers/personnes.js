const personnesRouter = require('express').Router();
const personnesController = require('../controllers/personnes.controller');



//Route pour ajouter un bénéficiaire
personnesRouter.post('/add-personnes', personnesController.addPersonnes);
//Route pour la liste des bénéficiaires
personnesRouter.get('/getAll', personnesController.getAll);


  module.exports=personnesRouter;