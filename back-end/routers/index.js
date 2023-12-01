const express = require('express');
const personnesRouter = require('./personnes');
const taskRouter = require('./Task');
const router = express.Router();

// Utilise le routeur personnesRouter pour toutes les routes commençant par /personnes
router.use('/personnes', personnesRouter);

// Utilise le routeur taskRouter pour toutes les routes commençant par /Task
router.use('/Task', taskRouter);

// Exporte le routeur principal
module.exports = router;
