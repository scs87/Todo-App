//Importamos Moongose para crear un nuevo Schema

const moongose = require('mongoose');

//Create Schema

const TodoItemSchema = new moongose.Schema({
    item:{
        type:String,
        required:true
    }

})

//Exportamos el Schema
module.exports = moongose.model('todo', TodoItemSchema);