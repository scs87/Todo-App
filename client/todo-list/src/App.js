import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [itemText, setItemText] = useState('')

  const addItem = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5500/api/item', { item: itemText })
      console.log(res)
      setItemText('');

    } catch (err) {

      console.log(err);
    }
  }

  useEffect(()=>{})

  return (
    <div className="App">
      <h1>Wish List</h1>
      <form className="form" onSubmit={e => addItem(e)}>
        <input type="text" placeholder='Search here' onChange={e => { setItemText(e.target.value) }} value={itemText}></input>
        <button type="submit">Añadir</button>
      </form>
      <div className="todo-listItems"></div>
      <div className="todo-item">
        <p className="item-content">This is the item 1</p>
        <button className="update-item">Update</button>
        <button className="delete-item">Borrar</button>
      </div>
      <div className="todo-item">
        <p className="item-content">This is the item 2</p>
        <button className="update-item">Update</button>
        <button className="delete-item">Borrar</button>
      </div>
      <div className="todo-item">
        <p className="item-content">This is the item 3</p>
        <button className="update-item">Update</button>
        <button className="delete-item">Borrar</button>
      </div>
    </div>
  );
}

export default App;
