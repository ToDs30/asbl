// Importe le module express pour créer une application web
const express = require('express');

// Importe le module mssql pour interagir avec une base de données SQL Server
const mssql = require('mssql');

// Crée une instance d'application Express
const app = express();

// Fonction asynchrone qui établit une connexion à la base de données en utilisant la configuration spécifiée
const createDbConnection = async () => {
    // Configuration de la connexion à la base de données à partir des variables d'environnement
    const sqlConfig = {
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        server: process.env.DB_SERVER,
        options: {
            trustServerCertificate: true
        }
    };

    // Établit la connexion à la base de données en utilisant la configuration spécifiée
    const db = await mssql.connect(sqlConfig);

    // Retourne l'objet de connexion à la base de données
    return db;
};

// Fonction asynchrone qui teste la connexion à la base de données
const testDbConnection = async () => {
    try {
        // Établit une connexion à la base de données
        const db = await createDbConnection();

        // Ferme la connexion à la base de données
        await db.close();

        // Affiche un message indiquant que la connexion à la base de données a réussi
        console.log('Connexion DB Réussi');

        // Retourne true pour indiquer que la connexion a réussi
        return true;
    } catch (error) {
        // En cas d'erreur, affiche un message d'erreur dans la console
        console.log('Connexion DB Error');
        console.error(error);

        // Retourne false pour indiquer que la connexion a échoué
        return false;
    }
};

// Exporte les fonctions createDbConnection et testDbConnection pour être utilisées dans d'autres fichiers
module.exports = {
    createDbConnection,
    testDbConnection
};
