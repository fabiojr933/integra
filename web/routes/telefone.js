const express = require('express');
const router = express.Router();

router.get('/index', (req, res) => {
  const nome = req.session.empresa;
  if (nome) {
    res.render('telefone/index', { empresa: nome.nome });
  } else {
    res.render('login', { error: 'Faça login' });
  }
});

module.exports = router;
