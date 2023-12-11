const express = require('express');
const personnesRouter = require('./personnes');
const taskRouter = require('./Task');
const commentairesRouter = require('./commentaire');
const benevolesRouter = require('./benevole');
const loginRouter = require('./login');
const router = express.Router();

// Utilise le routeur personnesRouter pour toutes les routes commençant par /personnes
router.use('/personnes', personnesRouter);

// Utilise le routeur taskRouter pour toutes les routes commençant par /Task
router.use('/Task', taskRouter);
// Utilise le routeur taskRouter pour toutes les routes commençant par /commentaire
router.use('/commentaire', commentairesRouter);

router.use('/benevole', benevolesRouter);

router.use('/auth', loginRouter);

router.use('/login', loginRouter);
// Exporte le routeur principal
module.exports = router;
