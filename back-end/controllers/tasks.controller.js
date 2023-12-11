// Importe la fonction createDbConnection du module '../utils/db.utils'
const { createDbConnection } = require("../utils/db.utils");

// Contrôleur de tâches (taskController)
const taskController = {
  // Fonction pour ajouter des tâches
  addTasks: async (req, res) => {
    // Affiche dans la console le corps de la requête (req.body)
    console.log(req.body);
    try {
      // Établit une connexion à la base de données
      const db = await createDbConnection();
      
      // Exécute une requête pour sélectionner toutes les tâches de la table 'Tasks'
      // const resultTasks = await db.query("SELECT * FROM Tasks");

      // Affiche dans la console à nouveau le corps de la requête (req.body)
      console.log(req.body);

      // Destructure les propriétés de req.body pour simplifier l'utilisation
      const {
        TaskName,
        Description,
        Deadline,
        Status
      } = req.body;

      // Exécute une requête pour insérer une nouvelle tâche dans la table 'Tasks'
      const query = await db.query(
        `INSERT INTO Tasks ( TaskName, Description, Deadline, Status)
        VALUES('${TaskName}','${Description}', '${Deadline}', '${Status}')`
      );

      // Vérifie si la requête a réussi et renvoie une réponse avec le statut 203 (Non-Authoritative Information)
      if (query) {
        res.status(203).json({ message: 'Task correctly added' });
      }      
    } catch (error) {
      // En cas d'erreur, affiche l'erreur dans la console et envoie une réponse d'erreur
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },

  // Fonction pour récupérer toutes les tâches
  getAll: async (req, res) => {
    try {
      // Établit une connexion à la base de données
      const db = await createDbConnection();

      // Exécute une requête pour sélectionner toutes les tâches de la table 'Task'
      const resultTasks = await db.query("SELECT * FROM Tasks");

      // Mappe les résultats de la requête SELECT pour renvoyer toutes les tâches
      const Tasks = resultTasks.recordset.map((row) => ({
        TaskID: row.TaskID,
        TaskName: row.TaskName,
        Description: row.Description,
        Deadline: row.Deadline,
        Status: row.Status
      }));
      
      // Envoie toutes les tâches en tant que réponse avec le statut 200 (OK)
      res.status(200).send(Tasks);
    } catch (error) {
      // En cas d'erreur, affiche l'erreur dans la console et envoie une réponse d'erreur
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },

  deleteTask: async (req, res) => {
    try {
        const db = await createDbConnection();
        const taskId = req.params.id;

        if (isNaN(taskId)) {
            res.status(400).json({ message: 'L\'ID de la tâche n\'est pas valide' });
            return;
        }

        const query = await db.query(`DELETE FROM Tasks WHERE TaskID = ${taskId}`);
        
        if (query) {
            res.status(200).json({ message: 'Tâche supprimée' });
        } else {
            res.status(404).json({ message: 'Tâche non trouvée' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}
};

// Exporte le contrôleur de tâches pour être utilisé ailleurs dans l'application
module.exports = taskController;
