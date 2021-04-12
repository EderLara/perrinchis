/**
 * Archivo de rutas del usuario
 */
'use strict';

/* Traermos las librerias necesarias: */
const express = require('express');
const UserCtrl = require('../control/userControl');
// Cargamos el metodo de express, llamado Router, para los metodos get y post:
const api = express.Router();

// Rutas, desde donde vamos a acceder al control:

api.get('/usertest', UserCtrl.userTest);
api.post('/registro', UserCtrl.CrudUser);

/*        Exportamos la ruta:       */
module.exports = api;