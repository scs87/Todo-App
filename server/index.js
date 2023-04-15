const express = require('express');
const moongose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
//use express.json() para obtener data en formato json
app.use(express.json());

//Puerto

const PORT = process.env.PORT || 5500;

app.use(cors());

//Importamos rutas
const TodoItemRoute = require('./routes/todoItems');




//Vamos a conectar a MooongoDB...

moongose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Data Connected"))
.catch(err => console.log(err))

app.use('/', TodoItemRoute );


//añadir puerto y conectar al servidor

app.listen(PORT, ()=> console.log("Server Connected") );