const { createDbConnection } = require("../utils/db.utils");

const loginController = {
    // Fonction pour ajouter un nouvel utilisateur
    addLogin: async (req, res) => {
        try {
            const db = await createDbConnection();

            // Récupération des données du corps de la requête
            const { UserName, PasswordHash } = req.body;
            console.log(req.body);

            // Vérification si l'utilisateur existe déjà
            const existingUser = await db.query(
                `SELECT * FROM Logins WHERE UserName = '${UserName}'`
            );

            if (existingUser.recordset.length > 0) {
                // Utilisateur déjà existant, renvoyer une réponse appropriée
                return res.status(400).send("Utilisateur déjà enregistré");
            }

            // Insertion du nouvel utilisateur
            const query = await db.query(
                `INSERT INTO Logins (UserName, PasswordHash)
                VALUES('${UserName}','${PasswordHash}')`
            );

            console.log(`Requête SQL: ${query} `);

            // Renvoyer une réponse avec les détails de l'utilisateur ajouté
            const resultLogin = await db.query(
                `SELECT * FROM Logins WHERE UserName = '${UserName}'`
            );

            const newUser = resultLogin.recordset[0];
            res.status(201).send(newUser);
        } catch (error) {
            // Gestion des erreurs : Affichage de l'erreur dans la console et envoi d'une réponse d'erreur au client
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    },

    // Fonction pour vérifier la connexion d'un utilisateur
    loginUser: async (req, res) => {
        try {
            const db = await createDbConnection();

            // Récupération des données du corps de la requête
            const { UserName, PasswordHash } = req.body;
            console.log(req.body);

            // Recherche de l'utilisateur dans la base de données
            const resultLogin = await db.query(
                `SELECT * FROM Logins WHERE UserName = '${UserName}' AND PasswordHash = '${PasswordHash}'`
            );

            // Vérification si l'utilisateur existe
            if (resultLogin.recordset.length > 0) {

                const user = resultLogin.recordset.map(info => {
                    return {
                        id: info.LoginID, 
                        username: info.UserName
                    }
                })
                console.log(resultLogin.recordset);
                // Utilisateur trouvé, renvoyer une réponse appropriée
                res.status(200).send(user );
            } else {
                // Utilisateur non trouvé, renvoyer une réponse appropriée
                res.status(401).send("Nom d'utilisateur ou mot de passe incorrect");
            }
        } catch (error) {
            // Gestion des erreurs : Affichage de l'erreur dans la console et envoi d'une réponse d'erreur au client
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    },

};

module.exports = loginController;
