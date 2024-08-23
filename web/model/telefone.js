const axios = require('axios');
const api = require('../config/index');
const evolution = require('../config/evolution');
const env = require('dotenv');
env.config();

class Telefone {

    async Conn(nome) {
        const response = await axios({
            method: 'GET',
            url: evolution.base_url + '/instance/connectionState/' + nome.instance,
            headers: {
                'Content-Type': 'application/json',
                'apikey': nome.apikey,  // Enviando a API key no cabeçalho x-api-key
            }
        });
        return response.data;
    }

    async Qrcode(nome) {
        const response = await axios({
            method: 'GET',
            url: evolution.base_url + '/instance/connect/' + nome.instance,
            headers: {
                'Content-Type': 'application/json',
                'apikey': nome.apikey,  // Enviando a API key no cabeçalho x-api-key
            }
        });
        return response.data;
    }

    async SalvarQrcode(id, data) {
        const response = await axios({
            method: 'PUT',
            url: api.base_url + '/empresa/' + id,
            data: data,
            headers: {
                'Content-Type': 'application/json',
                'apikey': process.env.APIKEY,  // Enviando a API key no cabeçalho x-api-key
            }
        });
        return response.data;
    }

}

module.exports = Telefone;


