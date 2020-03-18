const path = require('path');
require('dotenv').config({path: path.join('chapter9/nodebird', '.env')});

module.exports = {
    development: {
        username: 'root',
        password: process.env.SEQUELIZE_PASSWORD,
        database: 'nodebird',
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: 'false'
    },
    production: {
        username: 'root',
        password: process.env.SEQUELIZE_PASSWORD,
        database: 'nodebird',
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: 'false',
        logging: false
    }
};