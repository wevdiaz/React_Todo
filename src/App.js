import './App.css';

import { useState, useEffect } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load todos on page load
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const res = await fetch(API + "/todos")
        .then((response) => response.json())
        .then((data) => data )
        .catch((err) => console.log(err));

      setLoading(false);

      setTodos(res);
    };

    loadData();

  }, []);

  const handleSumit = async (e) => {
    e.preventDefault();
    
    const todo = {
      id: Math.random(),
      title,
      time,
      done: false
    };

    await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTodos((prevState) => [...prevState, todo]);

    setTitle("");
    setTime("");
  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
     
      <div className='todo-header'>
        <h1>React Todo</h1>
      </div>

      <div className='form-todo'>
        <h2>Insira a sua próxima tarefa:</h2>
        <form onSubmit={handleSumit}>

          <div className='form-control'>
              <label htmlFor='title'>O que você vai fazer?</label>
              <input 
                  type="text" 
                  name="title" 
                  placeholder='Título da Tarefa'
                  onChange={ (e) => setTitle(e.target.value) } 
                  value = {title || ""}
                  required
              />
          </div>

          <div className='form-control'>
              <label htmlFor='time'>Duração:</label>
              <input 
                  type="text" 
                  name="time" 
                  placeholder='Tempo estimado (em horas)'
                  onChange={ (e) => setTime(e.target.value) } 
                  value = {time || ""}
                  required
              />
          </div>

          <input type={"submit"} value="Criar Tarefa"/>
        </form>
      </div>

      <div className='list-todo'>
        <h2>Lista de tarefas:</h2>
        { todos.length === 0 && <p>Não há tarefas no momento!</p>}

        { todos.map( (todo) => {
          return (
            <div className='todo' key={todo.id}>
              <p>{todo.title}</p>
            </div>
          );
        })}

      </div>

    </div>
  );
}

export default App;
