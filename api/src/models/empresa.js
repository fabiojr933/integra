const knex = require('../database/database');

class Empresa {

    async EmpresaALL() {
        var dados = {};
        await knex('empresa').select('*').then((resposta) => {
            dados = resposta;
        });
        return dados;
    }

    async Salvar(empresa) {
        var dados = {};
        var id = await knex('empresa').insert(empresa);
        dados = {
            'id': id[0],
            ...empresa
        };
        return dados
    }

    async excluir(empresa) {
        await knex('empresa').where({ id: empresa.id }).del();
    }

    async alterar(empresa, id) {
        await knex('empresa').update(empresa).where({ id: id });
    }

    async listar_id(id) {
        var dados = {};
        await knex('empresa').select('*').where({ id: id }).orderBy('id', 'asc').then((resposta) => {
            dados = resposta;
        });
        return dados;
    }
    async autenticar(dados) {
        var dados2 = {};
        const data = await knex('empresa').select('*').where({ email: dados.email }).first();   
        if (data == undefined) {
            return dados2 = { error: 'email não cadastrado' };
        } if (data.senha == dados.senha) {
            return dados2 = { sucesso: 'ok', ...data  };
        } else {
            return dados2 = { error: 'senha invalido'};
        }
    }

}

module.exports = Empresa;