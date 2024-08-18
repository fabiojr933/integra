const express = require('express');
const router = express.Router();
const Empresa = require('../controller/empresaController');
const Produto = require('../controller/produtoController');
const SubProduto = require('../controller/subprodutoController');
const empresa = new Empresa();
const produto = new Produto();
const subproduto = new SubProduto();

router.get('/empresa', empresa.empresaLista);   // lista todas as empresas
router.post('/empresa', empresa.salvar);        // salvar empresa
router.put('/empresa/:id', empresa.alterar);        // alterar empresas
router.get('/empresa/:id', empresa.listar_id);  // lista todas as empresas
router.delete('/empresa/:id', empresa.excluir);     // excluir empresas


router.get('/produto', produto.produtoLista);   // lista todas as produto
router.post('/produto', produto.salvar);        // salvar produto
router.get('/produto/:id', produto.listar_id);  // lista todas as produto
router.put('/produto/:id', produto.alterar);        // alterar produto
router.delete('/produto/:id', produto.excluir);     // excluir produto



router.get('/subproduto', subproduto.subprodutoLista);   // lista todas as produto
router.post('/subproduto', subproduto.salvar);        // salvar produto
router.get('/subproduto/:id', subproduto.listar_id);  // lista todas as produto
router.put('/subproduto/:id', subproduto.alterar);        // alterar produto
router.delete('/subproduto/:id', subproduto.excluir);     // excluir produto


module.exports = router;