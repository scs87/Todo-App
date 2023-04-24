import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [itemText, setItemText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState('');
  const [updateItemText, setUpdateItemText] = useState('');
  const addItem = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5500/api/item', { item: itemText })
      console.log(res)
      setItemText('');
      setListItems(prev => [...prev, res.data]);

    } catch (err) {

      console.log(err);
    }
  }
  //ENSEÑAR ITEMS DE LA DATABASE
  useEffect(() => {
    const getItemsList = async () => {
      try {
        const res = await axios.get('http://localhost:5500/api/items')
        setListItems(res.data);

      } catch (err) {
        console.log(err);
      }
    }

    getItemsList()

  }, [])

  //BORRAR ITEM

  const deleteItem = async (id) => {

    try {
      const res = await axios.delete(`http://localhost:5500/api/item/${id}`)
      const newListItems = listItems.filter(item => item._id !== id);
      setListItems(newListItems);
      console.log(res);

    } catch (err) {
      console.log(err);
    }
  }

  //UPDATE ITEM 
  // DESPUES DE UPDATEAR 

  const updateItem = async (e) => {
    e.preventDefault()
    try{
      const res = await axios.put(`http://localhost:5500/api/item/${isUpdating}`, {item: updateItemText})
      console.log(res.data);
      const updateItemIndex = listItems.findIndex(item => item._id === isUpdating)
      const updatedItem = listItems[updateItemIndex].item = updateItemText
      console.log(updatedItem)
      setUpdateItemText('');
      setIsUpdating('');

    }catch(err){
      console.log(err);
    }


  }

  const renderUpdateForm = () => (
    <form className='update-form' onSubmit={(e)=>updateItem(e)}>
      <input className='update-new-input' type='text' placeholder='New Item' onChange={e=>{setUpdateItemText(e.target.value)}} value ={updateItemText}/>
      <button className='update-new-btn' type='submit'>Update</button>

    </form>

  )




  return (
    <div className="App">
      <h1>Wish List</h1>
      <form className="form" onSubmit={e => addItem(e)}>
        <input type="text" placeholder='Search here' onChange={e => { setItemText(e.target.value) }} value={itemText}></input>
        <button type="submit">Añadir</button>
      </form>
      <div className="todo-listItems">
        {
          listItems.map(item => (
            <div className="todo-item">
              {
                isUpdating === item._id
                  ? renderUpdateForm()
                  : <>
                    <p className="item-content">{item.item}</p>
                    <button className="update-item" onClick={() => { setIsUpdating(item._id) }}>Update</button>
                    <button className="delete-item" onClick={() => { deleteItem(item._id) }}>Borrar</button>

                  </>
              }

            </div>
          ))
        }

      </div>
    </div>
  );
}

export default App;