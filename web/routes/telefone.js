const express = require('express');
const router = express.Router();
const Telefone = require('../model/telefone')

router.get('/index', async (req, res) => {
  try {
    const nome = req.session.empresa;
    console.log(nome)
    if (nome) {
      res.render('telefone/index', { empresa: nome.nome, qrcode: nome.qrcode });
    } else {
      res.render('login', { error: 'Faça login' });
    }
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao excluir empresa.');
  }
});

router.get('/conexao', async (req, res) => {
  try {
    const nome = req.session.empresa;
    if (nome) {
      var telefone = new Telefone();
      const response = await telefone.Conn(nome);
      if (response.instance.state == 'open') {
        res.render('telefone/index', { empresa: nome.nome, telefone: 'Aparelho já está conectado com sucesso', qrcode: nome.qrcode });
      } if (response.instance.state == 'close') {
        var fora = '/dist/img/whatsapp-fora-do-ar.webp';
        res.render('telefone/index', { empresa: nome.nome, telefone: 'Aparelho não esta conectado \n Por favor clique em Gerar Qrcode', qrcode: fora });
      } if (response.instance.state == 'connecting') {
        const response = await telefone.Qrcode(nome);
        var data = { 'qrcode': response.base64 };
        await telefone.SalvarQrcode(nome.id, data);
        res.render('telefone/index', { empresa: nome.nome, telefone: 'Qrcode gerado com sucesso! escanea o QRCODE', qrcode: response.base64 });
      } else {
        const response = await telefone.Qrcode(nome);
        var data = { 'qrcode': response.base64 };
        await telefone.SalvarQrcode(nome.id, data);
        res.render('telefone/index', { empresa: nome.nome, telefone: 'Qrcode gerado com sucesso! escanea o QRCODE', qrcode: response.base64 });
      }
    } else {
      res.render('login', { error: 'Faça login' });
    }
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao excluir empresa.');
  }
});

module.exports = router;
