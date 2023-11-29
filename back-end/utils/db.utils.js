const express = require('express');
const mssql = require('mssql');
const app = express();

const createDbConnection = async () => {
    const sqlConfig = {
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        server: process.env.DB_SERVER,
        options: {
            trustServerCertificate: true
        }
    };

    const db = await mssql.connect(sqlConfig);
    return db;
};

const testDbConnection = async () => {
    try {
        const db = await createDbConnection();
        await db.close();

        console.log('Connexion DB Réussi');
        return true;
    } catch (error) {
        console.log('Connexion DB Error');
        console.error(error);
        return false;
    }
};

module.exports = {
    createDbConnection,
    testDbConnection
}
