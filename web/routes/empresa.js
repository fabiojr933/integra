const express = require('express');
const router = express.Router();

router.get('/novo', (req, res) => {
  res.render('empresa/novo', { title: 'Empresa' });
});

router.get('/lista', (req, res) => {
  res.render('empresa/lista', { title: 'Empresa' });
});

router.get('/editar', (req, res) => {
  res.render('empresa/editar', { title: 'Empresa' });
});

module.exports = router;
