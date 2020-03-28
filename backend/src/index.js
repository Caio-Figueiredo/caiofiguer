const express = require('express');
const cors = require('cors');
const routes = require('./routes') //Neste caso eu to passando o parametro ./ para sinalizar para o js que routes é um arquivo, e não um pacote como o express.

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);


/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/ listar alguma informação do back-end (quando eu acesso uma rota pelo navegador por exemplo)
 * POST: Criar uma informação no back-end (criar um usuário por exemplo)
 * PUT: Alterar alguma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */
/**
 * Tipos de parâmetros
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" (filtros, paginação)
 * Ex: http://localhost:3333/users?name=Caio&idade=23&page=2
 * Route Params: Parametros utilizados para identificar recursos (vai listar apenas o id desejado, identificar recursos) 
 * OBs: eu não posso enviar parametros a mais do que estão sendo esperados, é preciso ter esses parametros muito bem 
 * configurados
 * Ex: http://localhost:3333/users/:id -> tudo que vem depois da barra vai ser o id do usuário
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos (criar um usuario por exemplo, ou alterar)
 * Parar criação ou alteração vamos usar o método http POST. 
 * 
 */

 /** Tipos de bancos de dados
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server - relacionais
  * NoSQL: MongoDB (da uma velocidade para aplicação na hora de iniciar o DB), CouchDB, etc - não relacionais
  */

  /** Para instalar o banco de dados em nossa aplicação (vamos usar o KNEX.js)
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */



app.listen(3333);

