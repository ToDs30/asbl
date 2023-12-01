// Importe le module express et utilise sa fonction Router pour créer un routeur dédié aux personnes
const personnesRouter = require('express').Router();

// Importe le contrôleur associé aux opérations sur les bénéficiaires
const personnesController = require('../controllers/personnes.controller');

// Définit une route POST pour ajouter un bénéficiaire en utilisant la méthode addPersonnes du contrôleur
personnesRouter.post('/add-personnes', personnesController.addPersonnes);

// Définit une route GET pour récupérer la liste de tous les bénéficiaires en utilisant la méthode getAll du contrôleur
personnesRouter.get('/getAll', personnesController.getAll);

// Exporte le routeur personnesRouter pour être utilisé dans d'autres fichiers
module.exports = personnesRouter;
