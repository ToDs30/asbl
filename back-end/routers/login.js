const loginRouter = require('express').Router();

const loginController = require('../controllers/login.controller');

// Route pour ajouter un nouvel utilisateur
loginRouter.post('/add-login', loginController.addLogin);

// Route pour vérifier la connexion d'un utilisateur
loginRouter.post('/login', loginController.loginUser);



module.exports = loginRouter;
