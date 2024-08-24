const express = require('express');
const router = express.Router();
const Subproduto = require('../model/subproduto');

router.get('/novo', async (req, res) => {
  try {
    const nome = req.session.empresa;  
    if (nome) {
      var subproduto = new Subproduto();   
      const response = await subproduto.ListaAllProdEmpresa(nome.id); 
      res.render('subproduto/novo', { empresa: nome.nome, id_empresa: nome.id, produto: response });
    } else {
      return res.render('login', { error: 'Faça login' });
    }
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao excluir subproduto.');
  }
});
router.get('/excluir/:id', async (req, res) => {
  try {
    const nome = req.session.empresa;
    if (nome) {
      var id = req.params.id;
      var subproduto = new Subproduto();
      const response = await subproduto.Excluir(id);
      return res.redirect('/subproduto/lista');
    } else {
      res.render('login', { error: 'Faça login' });
    }
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao excluir subproduto.');
  }
});


router.get('/lista', async (req, res) => {
  try {
    const nome = req.session.empresa;
    if (nome) {
      var subproduto = new Subproduto();
      const response = await subproduto.ListaAll();  
      return res.render('subproduto/lista', { empresa: nome.nome, dados: response });
    } else {
      return res.render('login', { error: 'Faça login' });
    }
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao excluir subproduto.');
  }
});

router.get('/editar/:id', async (req, res) => {
  try {
    var id = req.params.id;
    const nome = req.session.empresa;
    if (nome) {
      var subproduto = new Subproduto();
      const response = await subproduto.Editar(id); 
      return res.render('subproduto/editar', { empresa: nome.nome, dados: response, id_empresa: nome.id });
    } else {
      return res.render('login', { error: 'Faça login' });
    }
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao excluir subproduto.');
  }
});

router.post('/salvar', async (req, res) => {
  try {
    var subproduto = new Subproduto();
    console.log(req.body);
  //  Excluir;
    const response = await subproduto.Salvar(req.body);
    return res.redirect('/subproduto/lista');
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao excluir subproduto.');
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
    var subproduto = new Subproduto();
    const response = await subproduto.Atualizar(dados, id);
    return res.redirect('/subproduto/lista');
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao atualizar subproduto.');
  }
});

module.exports = router;
