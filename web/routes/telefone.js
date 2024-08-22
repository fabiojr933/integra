const express = require('express');
const router = express.Router();
const Telefone = require('../model/telefone')

router.get('/index', (req, res) => {
  const nome = req.session.empresa;
  if (nome) {
    res.render('telefone/index', { empresa: nome.nome });
  } else {
    res.render('login', { error: 'Faça login' });
  }
});

router.get('/conexao', async (req, res) => {
  const nome = req.session.empresa;
  if (nome) {
    var telefone = new Telefone();
    const response = await telefone.Conn(nome);
    if (response.instance.state == 'open') {
      res.render('telefone/index', { empresa: nome.nome, telefone: 'Aparelho já está conectado com sucesso' });
    }
    return;
  } else {
    res.render('login', { error: 'Faça login' });
  }
});

module.exports = router;
