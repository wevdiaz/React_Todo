import './App.css';

import { useState, useEffect } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSumit = (e) => {
    e.preventDefault();
    console.log("Tarefa enviada!");
  }

  return (
    <div className="App">
     
      <div className='todo-header'>
        <h1>React Todo</h1>
      </div>

      <div className='form-todo'>
        <h2>Insira a sua próxima tarefa:</h2>
        <form onSubmit={handleSumit}>
          <input type={"submit"} value="Enviar"/>
        </form>
      </div>

      <div className='list-todo'>
        <h2>Lista de tarefas:</h2>
        { todos.length === 0 && <p>Não há tarefas no momento!</p>}
      </div>

    </div>
  );
}

export default App;
