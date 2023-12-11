// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { generateToken, verifyToken } = require('../middleware/auth');

const users = [
  { id: 1, username: 'utilisateur1', password: 'motdepasse1' },
  // Ajoutez d'autres utilisateurs au besoin
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Recherche de l'utilisateur par nom d'utilisateur et mot de passe
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Création du token si l'utilisateur est trouvé
    const token = generateToken({ id: user.id, username: user.username });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
  }
});

router.get('/protected-route', verifyToken, (req, res) => {
  // La route est protégée et le token est déjà vérifié par le middleware
  res.json({ message: 'Route protégée', user: req.user });
});

module.exports = router;
