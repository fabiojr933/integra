const axios = require('axios');
const api = require('../config/index');
const env = require('dotenv');
env.config();

class Produto {

    async Salvar(dados) {
        const response = await axios({
            method: 'POST',
            url: api.base_url + '/produto',
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
            url: api.base_url + '/produto',
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
            url: api.base_url + '/produto/' + id,
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
            url: api.base_url + '/produto/' + id,
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
            url: api.base_url + '/produto/' + id,
            data: dados,
            headers: {
                'Content-Type': 'application/json',
                'apikey': process.env.APIKEY,  // Enviando a API key no cabeçalho x-api-key
            }
        });
        return response.data;
    }

}

module.exports = Produto;



