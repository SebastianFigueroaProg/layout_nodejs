const { json } = require('express');
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();
const ruta = require('./router');
require('dotenv').config();

const port = process.env.PORT;

//seteamos el motor de plantilla ejs
app.set('view engine', 'ejs');

//para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}));
app.use(express(json));

//seteamos la carpeta public para archivos estaticos
app.use(express.static('public'));

//seteamos variables de entorno
dotenv.config({path: './env/.env'});

//para trabajar con las cookies
app.use(cookieParser());

//Rutas
app.use('/', ruta);


//Para eliminar la cache 
app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});


app.listen(port, ()=>{
    console.log(`SERVER corriendo en http://localhost:${port}`)
});