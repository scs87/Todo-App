const router = require('express').Router();



//IMPORTAMOS MODELO (OBJETO)
const TodoItemModel = require('../models/todoItems');


//CREAMOS LA PRIMERA RUTA -- AÑADIREMOS WISH ITEMS A LA DATABASE

router.post('/api/item', (req, res)=> {
    try{
        const newItem = new TodoItemModel({

        })

        }catch(err){
            res.json(err);
        }


    })








