
// Importez le module express et utilisez sa fonction Router pour créer un routeur dédié aux commentaires 
const commentairesRouter = require('express').Router();

// Importe le contrôleur associé aux opérations sur les commentaires 
const commentairesController = require('../controllers/commentaire.controller');

// Définit une route POST pour ajouter un commentaire en utilisant la méthode addCommentaire du contrôleur 
commentairesRouter.post('/add-commentaire', commentairesController.addCommentaire);

// Définit une route GET pour récupérer la liste de tous les commentaires en utilisant la méthode getAll du 
commentairesRouter.get('/getAll', commentairesController.getAll);

// Exporte le routeur commentairesRouter pour être utilisé dans d'autres fichiers 
module.exports = commentairesRouter;