const express = require('express');
const router = express.Router();
const Produto = require('../model/produto');

router.get('/novo', (req, res) => {
  try {
    const nome = req.session.empresa;
    if (nome) {
      res.render('produto/novo', { empresa: nome.nome, id_empresa: nome.id });
    } else {
      return res.render('login', { error: 'Faça login' });
    }
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao excluir produto.');
  }
});
router.get('/excluir/:id', async (req, res) => {
  try {
    const nome = req.session.empresa;
    if (nome) {
      var id = req.params.id;
      var produto = new Produto();
      const response = await produto.Excluir(id);
      return res.redirect('/produto/lista');
    } else {
      res.render('login', { error: 'Faça login' });
    }
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao excluir produto.');
  }
});


router.get('/lista', async (req, res) => {
  try {
    const nome = req.session.empresa;
    if (nome) {
      var produto = new Produto();
      const response = await produto.ListaAll();
      console.log(response);
      return res.render('produto/lista', { empresa: nome.nome, dados: response });
    } else {
      return res.render('login', { error: 'Faça login' });
    }
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao excluir produto.');
  }
});

router.get('/editar/:id', async (req, res) => {
  try {
    var id = req.params.id;
    const nome = req.session.empresa;
    if (nome) {
      var produto = new Produto();
      const response = await produto.Editar(id);
      console.log(response);
      return res.render('produto/editar', { empresa: nome.nome, dados: response, id_empresa: nome.id });
    } else {
      return res.render('login', { error: 'Faça login' });
    }
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao excluir produto.');
  }
});

router.post('/salvar', async (req, res) => {
  try {
    var produto = new Produto();
    const response = await produto.Salvar(req.body);
    return res.redirect('/produto/lista');
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao excluir produto.');
  }
});

router.post('/atualizar', async (req, res) => {
  try {
    var dados = {
      'nome': req.body.nome,
      'preco': req.body.preco,
      'id_empresa': req.body.id_empresa,
      'ativo': req.body.ativo,
    }
    var id = req.body.id;
    var produto = new Produto();
    const response = await produto.Atualizar(dados, id);
    return res.redirect('/produto/lista');
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao atualizar produto.');
  }
});

module.exports = router;
