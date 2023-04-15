import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Wish List</h1>
      <form>
        <input type="text" placeholder='Add Todo Item'></input>
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
