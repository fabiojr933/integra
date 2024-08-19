const env = require('dotenv');
env.config();

exports.Autorizacao = async (req, res, next) => {
  
    const token = req.headers['apikey'];
    if (!token || token == '' || token == undefined) {
        return res.status(401).json({
            status: '401',
            resultado: 'falha',
            error: 'api key é obrigatorio!'
        });
    }
    if (process.env.APIKEY == token) {      
        next();
    } else {
        return res.status(401).json({
            status: '401',
            resultado: 'falha',
            error: 'api key é errado!'
        });
    }
}