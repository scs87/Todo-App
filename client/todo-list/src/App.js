import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [itemText, setItemText] = useState('');
  const [listItems, setListItems] = useState([]);

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

  const deleteItem = async(id) => {

    try{
      const res = await axios.delete(`http://localhost:5500/api/item/${id}`)
      const newListItems = listItems.filter(item=> item._id !==id);
      setListItems(newListItems);
    }catch(err){
      console.log(err);
    }
  }




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
        <p className="item-content">{item.item}</p>
        <button className="update-item">Update</button>
        <button className="delete-item" onClick={()=>{deleteItem(item._id)}}>Borrar</button>
      </div>
      ))
      }

    </div>
    </div>
  );
}

export default App;
