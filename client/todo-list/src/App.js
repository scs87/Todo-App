import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" placeholder='Add Todo Item'></input>
        <button type="submit">Añadir</button>
      </form>
      <div className="todo-listItems"></div>
      <div className="todo-item">
        <p>This is the item 1</p>
        <button>Update</button>
        <button>Borrar</button>
      </div>
      <div className="todo-item">
        <p>This is the item 2</p>
        <button>Update</button>
        <button>Borrar</button>
      </div>
      <div className="todo-item">
        <p>This is the item 3</p>
        <button>Update</button>
        <button>Borrar</button>
      </div>
    </div>
  );
}

export default App;
