const Subproduto = require('../models/subproduto');
const subproduto = new Subproduto();

class subprodutoController {

  async subprodutoLista(req, res) {
    subproduto.SubprodutoALL().then((result) => {
      res.status(200).json(result);
    });
  };

  async salvar(req, res) {
    try {
      var dados = {
        'nome': req.body.nome,
        'ativo': req.body.ativo,
        'preco': req.body.preco,
        'id_empresa': req.body.id_empresa,
        'id_produto': req.body.id_produto
      }
      var dados = await subproduto.Salvar(dados);
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

      await subproduto.excluir(dados);
      return res.status(200).json({ 'Sucesso': 'subproduto excluido com sucesso' });
    } catch (error) {
      return res.status(400).json({ error: error.error });
    }
  }

  async alterar(req, res) {
    try {
      var id = req.params.id;   
      var dados = req.body;     
      await subproduto.alterar(dados, id);   
      return res.status(200).json({ 'Sucesso': 'subproduto alterado com sucesso' });
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: error.error });
    }
  }
  async listar_id(req, res) {
    try {
      var id = Number(req.params.id);
      var dados = await subproduto.listar_id(id);
      return res.status(200).json(dados);
    } catch (error) {
      return res.status(400).json({ error: error.error });
    }
  }

}



module.exports = subprodutoController;