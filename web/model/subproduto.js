const axios = require('axios');
const api = require('../config/index');
const env = require('dotenv');
env.config();

class Subproduto {

    async Salvar(dados) {
        const response = await axios({
            method: 'POST',
            url: api.base_url + '/subproduto',
            data: dados,
            headers: {
                'Content-Type': 'application/json',
                'apikey': process.env.APIKEY,  // Enviando a API key no cabeçalho x-api-key
            }
        });
        return response.data;
    }


    async ListaAll() {
        const response = await axios({
            method: 'GET',
            url: api.base_url + '/subproduto',
            headers: {
                'Content-Type': 'application/json',
                'apikey': process.env.APIKEY,  // Enviando a API key no cabeçalho x-api-key
            }
        });
        return response.data;
    }

    async Excluir(id) {
        const response = await axios({
            method: 'DELETE',
            url: api.base_url + '/subproduto/' + id,
            headers: {
                'Content-Type': 'application/json',
                'apikey': process.env.APIKEY,  // Enviando a API key no cabeçalho x-api-key
            }
        });
        return response.data;
    }

    async Editar(id) {
        const response = await axios({
            method: 'GET',
            url: api.base_url + '/subproduto/' + id,
            headers: {
                'Content-Type': 'application/json',
                'apikey': process.env.APIKEY,  // Enviando a API key no cabeçalho x-api-key
            }
        });
        return response.data;
    }

    async Atualizar(dados, id) {
        const response = await axios({
            method: 'PUT',
            url: api.base_url + '/subproduto/' + id,
            data: dados,
            headers: {
                'Content-Type': 'application/json',
                'apikey': process.env.APIKEY,  // Enviando a API key no cabeçalho x-api-key
            }
        });
        return response.data;
    }

    async ListaAllProdEmpresa(id_empresa) {
        console.log('--- ' + id_empresa)
        const response = await axios({
            method: 'GET',
            url: api.base_url + '/produto_empresa/' + id_empresa,
            headers: {
                'Content-Type': 'application/json',
                'apikey': process.env.APIKEY,  // Enviando a API key no cabeçalho x-api-key
            }
        });
        return response.data;
    }

}

module.exports = Subproduto;



