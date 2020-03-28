const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const connection = require('./database/connection');

const routes = express.Router();

//Rota para criação de sessão de login
routes.post('/sessions', SessionController.create);

//Rotas para cadastro e listagem de ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Rotas para cadastro e listagem de casos
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

//Rotas para exclusao de casos
routes.delete('/incidents/:id', IncidentController.delete);

//Rota para listagem de casos especificos
routes.get('/profile', ProfileController.index);


module.exports = routes;