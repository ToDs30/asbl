const { createDbConnection } = require("../utils/db.utils");

const benevolesController = {
    addBenevole: async (req, res) => {
        try {
            const db = await createDbConnection();
            console.log(res.body);

            const {
                Nom,
                Prenom,
                GSM,
                Date_Naissance,
                Rue,
                Numero,
                Boite,
                CodeP,
                Commune,
            } = req.body;
            const query = await db.query(
                `INSERT INTO Benevole ( Nom, Prenom, GSM, Date_Naissance, Rue, Numero, Boite, CodeP, Commune)
                VALUES ('${Nom}','${Prenom}','${GSM}','${Date_Naissance}','${Rue}','${Numero}','${Boite}','${CodeP}','${Commune}')`
            );

            if (query) {
                res.status(203).json({ message : 'Bénévole ajouté'});
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    },

    getAll: async (req, res) => {
        try {
            const db = await createDbConnection();
            const resultBenevole = await db.query("SELECT * FROM Benevole");
            const Benevole = resultBenevole.recordset.map((row) => ({
                IdBenevole: row.IdBenevole,
                Nom: row.Nom,
                Prenom: row.Prenom,
                GSM: row.GSM,
                Date_Naissance: row.Date_Naissance,
                Rue: row.Rue,
                Numero: row.Numero,
                Boite: row.Boite,
                CodeP: row.CodeP,
                Commune: row.Commune,
            }));
            res.status(200).send(Benevole);
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    }
};
module.exports = benevolesController;
	
