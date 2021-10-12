const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bianca893',
    database: "crud_nodejs_db"
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es:' + error);
        return
    }
    console.log('¡Conectado a la DB MYSQL!');
})

module.exports =conexion;