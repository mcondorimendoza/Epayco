const express = require('express');
const path = require('path'); //Para union de directorios
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express(); // Inicializacion de Express

// Settings
//Uso del puerto 3000 para el servidor
app.set('port', process.env.PORT || 3000);
//Configuracion del motor de plantilla
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',                    //Usando local server
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'crudnodejsmysql'

}, 'single'));

//routes

app.listen(app.get('port'), () => {
    console.log('Server en el puerto 3000');
});

