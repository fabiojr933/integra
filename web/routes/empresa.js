const express = require('express');
const router = express.Router();
const Empresa = require('../model/empresa');

router.get('/novo', (req, res) => {
  try {
    const nome = req.session.empresa;
    if (nome) {
      res.render('empresa/novo', { empresa: nome.nome });
    } else {
      return res.render('login', { error: 'Faça login' });
    }
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao excluir empresa.');
  }
});
router.get('/excluir/:id', async (req, res) => {
  try {
    console.log('ID:', req.params.id);  // Adicione isso para verificar o ID
    const nome = req.session.empresa;
    if (nome) {
      var id = req.params.id;
      var empresa = new Empresa();
      const response = await empresa.Excluir(id);
      return res.redirect('/empresa/lista');
    } else {
      res.render('login', { error: 'Faça login' });
    }
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao excluir empresa.');
  }
});


router.get('/lista', async (req, res) => {
  try {
    const nome = req.session.empresa;
    if (nome) {
      var empresa = new Empresa();
      const response = await empresa.ListaAll();
      console.log(response);
      return res.render('empresa/lista', { empresa: nome.nome, dados: response });
    } else {
      return res.render('login', { error: 'Faça login' });
    }
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao excluir empresa.');
  }
});

router.get('/editar/:id', async (req, res) => {
  try {
    var id = req.params.id;
    const nome = req.session.empresa;
    if (nome) {
      var empresa = new Empresa();
      const response = await empresa.Editar(id);
      console.log(response);
      return res.render('empresa/editar', { empresa: nome.nome, dados: response });
    } else {
      return res.render('login', { error: 'Faça login' });
    }
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao excluir empresa.');
  }
});

router.post('/salvar', async (req, res) => {
  try {
    var empresa = new Empresa();
    const response = await empresa.Salvar(req.body);
    return res.redirect('/empresa/lista');
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao excluir empresa.');
  }
});

router.post('/atualizar', async (req, res) => {
  try {
    var dados = {
      'nome': req.body.nome,
      'email': req.body.email,
      'telefone': req.body.telefone,
      'instance': req.body.instance,
      'apikey': req.body.apikey,
      'base_url': req.body.base_url,
      'senha': req.body.senha,
      'ativo': req.body.ativo,
    }
    var id = req.body.id;
    var empresa = new Empresa();
    const response = await empresa.Atualizar(dados, id);
    return res.redirect('/empresa/lista');
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao atualizar empresa.');
  }
});

module.exports = router;
