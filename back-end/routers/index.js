const express = require('express');
const personnesRouter = require('./personnes');
const taskRouter = require('./Task');
const router = express.Router();


// Router benef
router.use('/personnes', personnesRouter)

// Router Task
router.use('/Task', taskRouter)

module.exports = router;