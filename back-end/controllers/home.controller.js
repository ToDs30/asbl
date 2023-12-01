// Fonction de contrôleur pour la route index
const index = (req, res) => {
    try {
        // Rend le fichier de modèle EJS 'index.ejs' pour la page d'accueil
        res.render('home/index.ejs');
    } catch (error) {
        // En cas d'erreur, affiche l'erreur dans la console
        console.error(error);
        // Envoie une réponse avec le statut 500 (Internal Server Error)
        res.status(500).send('Internal Server Error');
    }
};

// Fonction de contrôleur pour la route personnes
const personnes = (req, res) => {
    try {
        // Rend le fichier de modèle EJS 'personnes.ejs' pour la page personnes
        res.render('home/personnes.ejs');
    } catch (error) {
        // En cas d'erreur, affiche l'erreur dans la console
        console.error(error);
        // Envoie une réponse avec le statut 500 (Internal Server Error)
        res.status(500).send('Internal Server Error');
    }
};

// Fonction de contrôleur pour la route Tasks
const Tasks = (req, res) => {
    try {
        // Rend le fichier de modèle EJS 'task.ejs' pour la page des tâches
        res.render('home/task.ejs');
    } catch (error) {
        // En cas d'erreur, affiche l'erreur dans la console
        console.error(error);
        // Envoie une réponse avec le statut 500 (Internal Server Error)
        res.status(500).send('Internal Server Error');
    }
};
