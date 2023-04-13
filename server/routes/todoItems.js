const router = require('express').Router();



//IMPORTAMOS MODELO (OBJETO)
const TodoItemModel = require('../models/todoItems');


//CREAMOS LA PRIMERA RUTA -- AÑADIREMOS WISH ITEMS A LA DATABASE

router.post('/api/item', async (req, res) => {
    try {
        const newItem = new TodoItemModel({
            item: req.body.item
        })
        //GUARDAMOS EL OBJETO EN LA DATABASE
        const saveItem = await newItem.save()
        res.status(200).json('Item added Successfully.');

    } catch (err) {
        res.json(err);
    }


})

//CREAMOS UNA SEGUNDA RUTA --OBTENEMOS DATA DE DATABASE

router.get('/api/items', async (req, res) => {

    try{
        const allTodoItems = await TodoItemModel.find({});
        resizeTo.status(200).json(allTodoItems)
        }catch (err) {
        res.json(err);

    }


})


//EXPORT ROUTER

module.exports = router;










