const express = require('express');
const router = express.Router();
const Telefone = require('../model/telefone')

router.get('/index', (req, res) => {
  const nome = req.session.empresa;
  console.log(nome)
  if (nome) {
    res.render('telefone/index', { empresa: nome.nome, qrcode: nome.qrcode });
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
      res.render('telefone/index', { empresa: nome.nome, telefone: 'Aparelho já está conectado com sucesso', qrcode: nome.qrcode });
    } if (response.instance.state == 'close') {
      var fora = '/dist/img/whatsapp-fora-do-ar.webp';
      res.render('telefone/index', { empresa: nome.nome, telefone: 'Aparelho não esta conectado', qrcode: fora });
    } else {
      const response = await telefone.Qrcode(nome);
      var data = { 'qrcode': response.base64 };
      await telefone.SalvarQrcode(nome.id, data);
      res.render('telefone/index', { empresa: nome.nome, telefone: 'Aparelho conectado com sucesso', qrcode: response.base64 });
    }
    return;
  } else {
    res.render('login', { error: 'Faça login' });
  }
});

module.exports = router;
