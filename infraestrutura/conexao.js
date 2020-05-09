const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'apirest',
    password: 'apirest',
    database: 'agendaPetshop'
})

module.exports = conexao;