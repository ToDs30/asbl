const { createDbConnection } = require("../utils/db.utils");

const commentairesController = {
    addCommentaire: async (req, res) => {
        console.log(req.body);
        try {
            const db = await createDbConnection();

            console.log(req.body);

            const {
                Nom,
                Prenom,
                Date_COM,
                Sujet,
                Descrip
            } = req.body;

            const query = await db.query(
                `INSERT INTO commentaire ( Nom, Prenom, Date_COM, Sujet, Descrip)
                VALUES('${Nom}','${Prenom}','${Date_COM}','${Sujet}','${Descrip}')`
            );

            if (query) {
                res.status(203).json({ message : 'Message ajouté'});
            }
        }catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    },

    getAll: async (req, res) => {
        try {
            const db = await createDbConnection();

            const resultCommentaire = await db.query("SELECT * FROM commentaire");

            const commentaire = resultCommentaire.recordset.map((row) => ({
                ID: row.ID,
                Nom: row.Nom,
                Prenom: row.Prenom,
                Date_COM: row.Date_COM,
                Sujet: row.Sujet,
                Descrip: row.Descrip
            }));
            res.status(200).send(commentaire);
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    },
    deleteCommentaire: async (req, res) => {
        try {
            const db = await createDbConnection();
            const commentaireId = req.params.id;

            if (isNaN(commentaireId)) {
                res.status(400).json({ message: 'L\'ID du commentaire n\'est pas valide' });
                return;
            }

            const query = await db.query(`DELETE FROM commentaire WHERE ID = ${commentaireId}`);
            
            if (query) {
                res.status(200).json({ message: 'Commentaire supprimé' });
            } else {
                res.status(404).json({ message: 'Commentaire non trouvé' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    }
};

module.exports = commentairesController;

