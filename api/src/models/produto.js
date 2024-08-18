const knex = require('../database/database');

class Produto {

    async ProdutoALL() {
        var dados = {};
        await knex('produto').select('*').then((resposta) => {
            dados = resposta;
        });
        return dados;
    }

    async Salvar(produto) {
        var dados = {};
        var id = await knex('produto').insert(produto);
        dados = {
            'id': id[0],
            ...produto
        };
        return dados
    }

    async excluir(produto) {
        await knex('produto').where({ id: produto.id }).del();
    }

    async alterar(produto, id) {
        await knex('produto').update(produto).where({ id: id });
    }

    async listar_id(id) {
        var dados = {};
        await knex('produto').select('*').where({ id: id }).orderBy('id', 'asc').then((resposta) => {
            dados = resposta;
        });
        return dados;
    }

}

module.exports = Produto;