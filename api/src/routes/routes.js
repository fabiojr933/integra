const express = require('express');
const router = express.Router();
const Empresa = require('../controller/empresaController');
const Produto = require('../controller/produtoController');
const SubProduto = require('../controller/subprodutoController');
const middleware = require('../middlewares/auth');
const empresa = new Empresa();
const produto = new Produto();
const subproduto = new SubProduto();

router.get('/empresa', middleware.Autorizacao, empresa.empresaLista);   // lista todas as empresas
router.get('/empresa/:id', middleware.Autorizacao, empresa.listar_id);  // lista todas as empresas
router.post('/empresa', middleware.Autorizacao, empresa.salvar);        // salvar empresa
router.put('/empresa/:id', middleware.Autorizacao, empresa.alterar);        // alterar empresas
router.delete('/empresa/:id', middleware.Autorizacao, empresa.excluir);     // excluir empresas


router.get('/produto', middleware.Autorizacao, produto.produtoLista);   // lista todas as produto
router.post('/produto', middleware.Autorizacao, produto.salvar);        // salvar produto
router.get('/produto/:id', middleware.Autorizacao, produto.listar_id);  // lista todas as produto
router.put('/produto/:id', middleware.Autorizacao, produto.alterar);        // alterar produto
router.delete('/produto/:id', middleware.Autorizacao, produto.excluir);     // excluir produto



router.get('/subproduto', middleware.Autorizacao, subproduto.subprodutoLista);   // lista todas as produto
router.post('/subproduto', middleware.Autorizacao, subproduto.salvar);        // salvar produto
router.get('/subproduto/:id', middleware.Autorizacao, subproduto.listar_id);  // lista todas as produto
router.put('/subproduto/:id', middleware.Autorizacao, subproduto.alterar);        // alterar produto
router.delete('/subproduto/:id', middleware.Autorizacao, subproduto.excluir);     // excluir produto


module.exports = router;