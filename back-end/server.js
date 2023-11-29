require("dotenv").config(); // Chargement des variables d'environnement
const express = require("express"); // Importation du module express
const app = express(); // initialisation de l'app Express
const homeController = require("./controllers/home.controller");
const dbutils = require("./utils/db.utils");
const router = require("./routers");
const path = require('path');// importation du module Path
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static("assets"));

//Test de la connexion vers la DB
dbutils.testDbConnection();

//Création du serveur
app.use((req, res, next) => {
  const requestUrl = req.url;
  const requestMethod = req.method;
  console.log(`url: ${requestUrl} • method: ${requestMethod}`);
  next();
});
app.use("/api", router);


//Routes
//Accueil 
app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, ''));
  res.end('Hello coucou');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erreur interne du serveur!');
});


app.listen(process.env.PORT, () => {
  console.log(`Les serveurs Express écoutent sur le port ${process.env.PORT}`);
});