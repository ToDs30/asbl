// Charge les variables d'environnement à partir du fichier .env
require("dotenv").config();

// Importe le module express pour créer une application web
const express = require("express");

// Initialise l'application Express
const app = express();

// Importe le contrôleur de la page d'accueil
const homeController = require("./controllers/home.controller");

// Importe les utilitaires de base de données
const dbutils = require("./utils/db.utils");

// Importe le routeur principal
const router = require("./routers");

// Importe le module Path pour manipuler les chemins de fichiers
const path = require('path');

// Importe le module CORS pour gérer les requêtes Cross-Origin Resource Sharing
const cors = require('cors');

// Utilise CORS pour gérer les requêtes Cross-Origin Resource Sharing
app.use(cors());

// Utilise le middleware express.json pour parser les données JSON des requêtes
app.use(express.json());

// Utilise express.static pour servir des fichiers statiques depuis le répertoire "assets"
app.use(express.static("assets"));

// Teste la connexion à la base de données
dbutils.testDbConnection();

// Middleware pour afficher les informations sur chaque requête entrante
app.use((req, res, next) => {
  const requestUrl = req.url;
  const requestMethod = req.method;
  console.log(`url: ${requestUrl} • method: ${requestMethod}`);
  next();
});

// Utilise le routeur principal pour les URL commençant par "/api"
app.use("/api", router);

// Définit la route pour la page d'accueil
app.get('/app-index', (req, res) => {
  res.end('Hello coucou');
});

// Middleware pour gérer les erreurs, affiche l'erreur dans la console et envoie une réponse d'erreur
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erreur interne du serveur!');
});

// Lance le serveur Express en écoutant sur le port spécifié dans les variables d'environnement
app.listen(process.env.PORT, () => {
  console.log(`Les serveurs Express écoutent sur le port ${process.env.PORT}`);
});
