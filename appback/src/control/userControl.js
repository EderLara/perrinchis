/**
 * Controlador de usuario. MySQL Power
 */

 'use strict';

 // Importamos el modulo bcrypt, para las contraseñas:
 // let bcrypt = require('bcryptjs');
 // Importamos las librerias de control de archivos y rutas:
 let path = require('path');             // Rutas y url de objetos
 let fs = require('fs');                 // Libreria para manejo de archivos y de url:
 // Cargamos el framework para trabajar con fechas:
 let moment = require('moment');

 // Cargamos el archivo de mensajes:

 // Cargamos la configuración de la base de datos:
 const conn = require('../config/conex');
 // Cargamos los mensajes de estado del servidor:
 const { msj } = require('./serverstatus');

 // Funciones de controlador:
 /* -------------------      Pruebas         -------------------- */
 function userTest(req, res){
     // Hora Actual:
     let ahora = moment().format('LTS');
     // Response desde el servidor:
     res.status(200).send({
             userCTRL: 'Accediendo a la ruta de prueba de Usuarios',
             HoraActual : ahora,
             Mensajes: msj,
             Estado: msj.m200
     });
 }

 /* -------------------      CrudUser         -------------------- */
 function CrudUser(req, res){
      // Capturamos los datos del formulario:
      const parametros = req.body;

     let iduser = parametros.iduser;
     let correo = parametros.correo;
     let clave = parametros.clave;
     let iddatopersonal = parametros.iddatopersonal;
     let tipodocumento = parametros.tipodocumento;
     let genero = parametros.genero;
     let nombre = parametros.nombre;
     let apellido = parametros.apellido;
     let cedula = parametros.cedula;
     let direccion = parametros.direccion;
     let telefono = parametros.telefono;
     let nace = parametros.nace;
     let idperfil = parametros.idperfil;
     let tipousuario = parametros.tipousuario;
     let boton = parametros. boton;

     // Consulta:
     const sql = "CALL CrudUsuario("+iduser+", '"+correo+"', '"+clave+"', "+iddatopersonal+", "+tipodocumento+", "+genero+", '"+nombre+"', '"+apellido+"', '"+cedula+"', '"+direccion+"', '"+telefono+"', '"+nace+"', "+idperfil+", "+tipousuario+", '"+boton+"')";

     // Ejecutamos la consulta:
     conn.query(sql, (err, resultado)=>{
         console.log(sql);
         // En caso de error antes de ejecutar, mostrar el error:
         if (err) throw err;
         // Validar operacion>
         if (resultado.length > 0) {
             const operacion= resultado[0];
             return res.status(200).send({
                 resultado : operacion[0],
                 mensaje: msj.m200
             });
         }else {
             // Mostrar mensaje de error:
             return res.status(405).send({mensaje: msj.m405});
         }
     });
 }

 /* -------------------      LoginUSer          -------------------- */

 /* -------------------      GetUser            -------------------- */

 /* -------------------      GetUsers           -------------------- */


 // Exportamos el modulo:
 module.exports = {
     userTest,
     CrudUser
 }
