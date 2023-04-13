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

    try {
        const allTodoItems = await TodoItemModel.find({});

        res.status(200).json(allTodoItems)
    } catch (err) {
        res.json(err);

    }

})

//UPDATEAMOS ITEM
router.put('/api/item/:id', async (req, res) => {

    try {
        const updateItem = await TodoItemModel.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).json('Item Updated');
    } catch (err) {
        res.json(err);

    }



})


// BORRAMOS ITEM DE LA DATABASE,

router.delete('/api/item/:id', async (req, res) => {

    try {
        //encontramos el item por id y lo borramos
        const deleteItem = await TodoItemModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted');
    } catch (err) {
        res.json(err);
    }
})


//EXPORT ROUTER

module.exports = router;










