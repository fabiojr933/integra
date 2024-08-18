const knex = require('knex');

const database = knex({
    client: 'mysql2',
    version: '8.0', // Ajuste conforme a versão do MySQL que você está usando
    connection: {
        host: '127.0.0.1', // Endereço do host MySQL
        port: 3306, // Porta padrão do MySQL
        user: 'root', // Substitua pelo seu usuário MySQL
        password: '', // Substitua pela sua senha MySQL
        database: 'apisistema', // Nome do banco de dados MySQL
    },
    migrations: {
        directory: 'src/config/migrations/',
    },
});

module.exports = database;
