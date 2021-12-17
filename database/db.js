const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: 'database-konecta.cz9xfbrvuo1l.sa-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Konecta+2022',
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