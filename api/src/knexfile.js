module.exports = {
    dev: {
        client: 'mysql2',
        version: '8.0', // A versão pode variar de acordo com o MySQL que você está usando
        connection: {
            host: '127.0.0.1',
            port : 3306, // Porta padrão do MySQL
            user: 'root', // Substitua pelo seu usuário MySQL
            password: '', // Substitua pela sua senha MySQL
            database: 'apisistema', // Nome do banco de dados MySQL
        },
        migrations: {
            directory: '../src/database/migrations/',
        }
    },
};
