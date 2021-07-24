const app = require('./app');
const mongoose = require('mongoose');

require('dotenv').config({path:'VARIEBLES.env'})
 
// Conectando-se ao banco de dados

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
console.log(process.env.DATABASE)
mongoose.Promise = global.Promise;
 
mongoose.connection.on('error', (error) => {
    console.error("ERRO: " + error.message);
});

// Carregando dos Models
require('./models/Project');
require('./models/Activity');


app.set('port', process.env.port || 7777);
  
const server = app.listen(app.get('port'), ( ) => {
    console.log("Servidor rodando na porta: " + server.address().port);
})