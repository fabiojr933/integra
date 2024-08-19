const express = require('express');
const router = express.Router();

router.get('/index', (req, res) => {
  res.render('telefone/index', { title: 'Telefone' });
});

module.exports = router;
