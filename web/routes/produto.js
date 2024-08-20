const express = require('express');
const router = express.Router();

router.get('/novo', (req, res) => {
  const nome = req.session.empresa;
  if (nome) {
    res.render('produto/novo', { empresa: nome.nome });
  } else {
    res.render('login', { error: 'Faça login' });
  }
});

router.get('/lista', (req, res) => {
  const nome = req.session.empresa;
  if (nome) {
    res.render('produto/lista', { empresa: nome.nome });
  } else {
    res.render('login', { error: 'Faça login' });
  }
});

router.get('/editar', (req, res) => {
  const nome = req.session.empresa;
  if (nome) {
    res.render('produto/editar', { empresa: nome.nome });
  } else {
    res.render('login', { error: 'Faça login' });
  }
});

module.exports = router;
