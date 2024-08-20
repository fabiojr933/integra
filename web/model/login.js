const axios = require('axios');
const api = require('../config/index');
const env = require('dotenv');
env.config();

class Login {

    async Autenticar(senha, email) {
        const data = {
            email: email,
            senha: senha
        }
        const response = await axios({
            method: 'GET',
            url: api.base_url + '/empresa/autenticar',
            data: data,
            headers: {
                'Content-Type': 'application/json',
                'apikey': process.env.APIKEY,  // Enviando a API key no cabeçalho x-api-key
            }
        });
        return response.data;
    }

}

module.exports = Login;





/*

 async Autenticar(senha, email) {
        const response = await axios({
            method: 'post',
            url: api.base_url + '/user/12345',
            data: produto,
            headers: {
                'Content-Type': 'application/json',
                'apikey': 'your_api_key_here',  // Enviando a API key no cabeçalho x-api-key
            }
        });
        

        //axios.get(api.base_url + '/teste');
    }


*/