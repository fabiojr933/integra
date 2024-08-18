const Empresa = require('../models/empresa');
const empresa = new Empresa();
class empresaController {

  async empresaLista(req, res) {
    empresa.EmpresaALL().then((result) => {
      res.status(200).json(result);
    });
  };

  async salvar(req, res) {
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
      var dados = await empresa.Salvar(dados);
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
     
      await empresa.excluir(dados);
      return res.status(200).json({ 'Sucesso': 'cartao excluido com sucesso' });
    } catch (error) {
      return res.status(400).json({ error: error.error });
    }
  }

  async alterar(req, res) {
    try {
      var id = Number(req.params.id);
      var dados = req.body; 

      await empresa.alterar(dados, id);
      return res.status(200).json({ 'Sucesso': 'empresa alterado com sucesso' });
    } catch (error) {
      return res.status(400).json({ error: error.error });
    }
  }
  async listar_id(req, res) {
    try {
      var id = Number(req.params.id);
      var dados = await empresa.listar_id(id);
      return res.status(200).json(dados);
    } catch (error) {
      return res.status(400).json({ error: error.error });
    }
  }

}



module.exports = empresaController;