const express = require('express');
const router = express.Router();

router.get('/novo', (req, res) => {
  res.render('produto/novo', { title: 'Produto' });
});

router.get('/lista', (req, res) => {
  res.render('produto/lista', { title: 'Produto' });
});

router.get('/editar', (req, res) => {
  res.render('produto/editar', { title: 'Produto' });
});

module.exports = router;
