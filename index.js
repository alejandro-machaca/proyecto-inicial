'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 8080;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
		.then(() => {
			console.log("Conexion a la base de datos establecida satisfactoriamente...");

			// Creacion del servidor
			app.listen(port, () => {
				console.log("Servidor corriendo correctamente en la url: localhost:8080");
			});
		})
		.catch(err => console.log(err));



