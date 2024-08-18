const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('produtos/produto', { title: 'Produtos' });
});

router.get('/lista', (req, res) => {
  res.render('produtos/lista', { title: 'Produtos' });
});

module.exports = router;
