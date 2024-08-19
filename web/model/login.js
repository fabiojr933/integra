const axios = require('axios');
const api = require('../config/index');

class Login {

    async Salvar(produto) {
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

}

module.exports = Login;