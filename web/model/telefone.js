const axios = require('axios');
const api = require('../config/index');
const evolution = require('../config/evolution');
const env = require('dotenv');
env.config();

class Telefone {

    async Conn(nome) {
        const response = await axios({
            method: 'GET',
            url: evolution.base_url + '/' + nome.instance,
            headers: {
                'Content-Type': 'application/json',
                'apikey': nome.apikey,  // Enviando a API key no cabeçalho x-api-key
            }
        });
        return response.data;
    }

}

module.exports = Telefone;


