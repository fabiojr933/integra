const Produto = require('../models/produto');
const produto = new Produto();

class produtoController {

  async produtoLista(req, res) {
    produto.ProdutoALL().then((result) => {
      res.status(200).json(result);
    });
  };

  async salvar(req, res) {
    try {
      var dados = {
        'nome': req.body.nome,
        'ativo': req.body.ativo,
        'preco': req.body.preco,
        'id_empresa': req.body.id_empresa
      }
      var dados = await produto.Salvar(dados);
      return res.status(201).json(dados);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error.error });
    }
  }
  async excluir(req, res) {
    try {
      var dados = {
        'id': Number(req.params.id),
      }

      await produto.excluir(dados);
      return res.status(200).json({ 'Sucesso': 'produto excluido com sucesso' });
    } catch (error) {
      return res.status(400).json({ error: error.error });
    }
  }

  async alterar(req, res) {
    console.log('chegoiiiiiii')
    try {
      var id = req.params.id;
      console.log(id);     
      var dados = req.body;
     
      await produto.alterar(dados, id);
   
      return res.status(200).json({ 'Sucesso': 'produto alterado com sucesso' });
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: error.error });
    }
  }
  async listar_id(req, res) {
    try {
      var id = Number(req.params.id);
      var dados = await produto.listar_id(id);
      return res.status(200).json(dados);
    } catch (error) {
      return res.status(400).json({ error: error.error });
    }
  }

}



module.exports = produtoController;