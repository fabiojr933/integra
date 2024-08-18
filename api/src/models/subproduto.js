const knex = require('../database/database');

class subproduto {

    async SubprodutoALL() {
        var dados = {};
        await knex('subproduto').select('*').then((resposta) => {
            dados = resposta;
        });
        return dados;
    }

    async Salvar(subproduto) {
        var dados = {};
        var id = await knex('subproduto').insert(subproduto);
        dados = {
            'id': id[0],
            ...subproduto
        };
        return dados
    }

    async excluir(subproduto) {
        await knex('subproduto').where({ id: subproduto.id }).del();
    }

    async alterar(subproduto, id) {
        await knex('subproduto').update(subproduto).where({ id: id });
    }

    async listar_id(id) {
        var dados = {};
        await knex('subproduto').select('*').where({ id: id }).orderBy('id', 'asc').then((resposta) => {
            dados = resposta;
        });
        return dados;
    }

}

module.exports = subproduto;