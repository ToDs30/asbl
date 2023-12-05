// Import de la fonction createDbConnection depuis le fichier db.utils du répertoire utils
const { createDbConnection } = require("../utils/db.utils");

// Contrôleur pour la gestion des bénéficiaires
const personnesController = {
  // Fonction pour ajouter un bénéficiaire
  addPersonnes: async (req, res) => {
    try {
      // Connexion à la base de données
      const db = await createDbConnection();

      // Exécution d'une requête pour récupérer tous les bénéficiaires existants
      const resultPersonnes = await db.query("SELECT * FROM Personne");

      // Affichage des données reçues dans la requête HTTP
      console.log(req.body);

      // Destructuration des données du corps de la requête
      const {
        Nom,
        Prenom,
        Rue,
        Numero,
        Code_Postal,
        Commune,
        Revenus,
        Date_de_naissance,
        Handicape,
        Immigres,
        Sans_Abris,
        Sans_Papier,
        bebe0_6Mois,
        Bebe_6_24_Mois,
        Enfants_2_14_Ans,
        Ados_14_18_Ans,
        J_Adulte_18_24_Ans,
        Adultes_25_64_Ans,
        Pensionne,
        Chef_Menage,
      } = req.body;

      

      // Exécution de la requête SQL pour insérer un nouveau bénéficiaire dans la base de données
      const query = await db.query(
        `INSERT INTO Personne (Nom, Prenom, Rue, Numero, Code_Postal, Commune, Revenus, Date_de_naissance, Handicape, Immigres, Sans_Abris, Sans_Papier, Bebe_0_6_Mois, Bebe_6_24_Mois, Enfants_2_14_Ans, Ados_14_18_Ans, J_Adulte_18_24_Ans, Adultes_25_64_Ans, Pensionne, Chef_menage)
        VALUES('${Nom}','${Prenom}','${Rue}','${Numero}','${Code_Postal}','${Commune}', '${Revenus}','${Date_de_naissance}','${Handicape ? 1 : 0}','${Immigres ? 1 : 0}','${Sans_Abris ? 1 : 0}','${Sans_Papier ? 1 : 0}','${bebe0_6Mois ? 1 : 0}','${Bebe_6_24_Mois ? 1 : 0}','${Enfants_2_14_Ans ? 1 : 0}','${Ados_14_18_Ans ? 1 : 0}','${J_Adulte_18_24_Ans ? 1 : 0}','${Adultes_25_64_Ans ? 1 : 0}','${Pensionne ? 1 : 0}', '${Chef_Menage ? 1 : 0}')`
      );
      console.log(`Requête SQL: ${query}`);
      // Mapping des résultats de la requête pour préparer la réponse HTTP
      const Personnes = resultPersonnes.recordset.map((row) => ({
        Nom: row.Nom,
        Prenom: row.Prenom,
        Rue: row.Rue,
        Numero: row.Numero,
        Code_Postal: row.Code_Postal,
        Commune: row.Commune,
        Revenus: row.Revenus,
        Date_de_naissance: row.Date_de_naissance,
        Handicape: row.Handicape,
        Immigres: row.Immigres,
        Sans_Abri: row.Sans_Abris,
        Sans_Papier: row.Sans_Papier,
        bebe0_6Mois: row.Bebe_0_6_Mois,
        Bebe_6_24_Mois: row.Bebe_6_24_Mois,
        Enfants_2_14_Ans: row.Enfants_2_14_Ans,
        Ados_14_18_Ans: row.Ados_14_18_Ans,
        J_Adulte_18_24_Ans: row.J_Adulte_18_24_Ans,
        Adultes_25_64_Ans: row.Adultes_25_64_Ans,
        Pensionne: row.Pensionne,
        Chef_Menage: row.Chef_Menage,
      }));

      // Affichage des données préparées pour la réponse HTTP
      console.log(Personnes);

      // Envoi de la réponse HTTP avec les données des bénéficiaires
      res.send(Personnes);
    } catch (error) {
      // Gestion des erreurs : Affichage de l'erreur dans la console et envoi d'une réponse d'erreur au client
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },

  // Fonction pour récupérer tous les bénéficiaires
  getAll: async (req, res) => {
    try {
      // Connexion à la base de données
      const db = await createDbConnection();

      // Exécution d'une requête pour récupérer tous les bénéficiaires
      const resultPersonnes = await db.query("SELECT * FROM Personne");

      // Mapping des résultats de la requête pour préparer la réponse HTTP
      const Personnes = resultPersonnes.recordset.map((row) => ({
        Nom: row.Nom,
        Prenom: row.Prenom,
        Rue: row.Rue,
        Numero: row.Numero,
        Code_Postal: row.Code_Postal,
        Commune: row.Commune,
        Revenus: row.Revenus,
        Date_de_naissance: row.Date_de_naissance,
        Handicape: row.Handicape,
        Immigres: row.Immigres,
        Sans_Abri: row.Sans_Abris,
        Sans_Papier: row.Sans_Papier,
        bebe0_6Mois: row.Bebe_0_6_Mois,
        Bebe_6_24_Mois: row.Bebe_6_24_Mois,
        Enfants_2_14_Ans: row.Enfants_2_14_Ans,
        Ados_14_18_Ans: row.Ados_14_18_Ans,
        J_Adulte_18_24_Ans: row.J_Adulte_18_24_Ans,
        Adultes_25_64_Ans: row.Adultes_25_64_Ans,
        Pensionne: row.Pensionne,
        Chef_Menage: row.Chef_Menage,
      }));

      // Envoi de la réponse HTTP avec les données des bénéficiaires
      res.status(200).send(Personnes);
    } catch (error) {
      // Gestion des erreurs : Affichage de l'erreur dans la console et envoi d'une réponse d'erreur au client
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },
  
};

// Export du contrôleur pour être utilisé ailleurs dans l'application
module.exports = personnesController;
