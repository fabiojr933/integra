const express = require('express');
const router = express.Router();

router.get('/novo', (req, res) => {
  res.render('subproduto/novo', { title: 'Subproduto' });
});

router.get('/lista', (req, res) => {
  res.render('subproduto/lista', { title: 'Subproduto' });
});

router.get('/editar', (req, res) => {
  res.render('subproduto/editar', { title: 'Subproduto' });
});

module.exports = router;
