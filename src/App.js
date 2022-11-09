import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import TodoAction from './components/Todos/TodoAction';

function App() {
  const [todo, setTodo] = useState([]);

  function addTodoHandler(textTodo) {
    const newTodo = {
      text: textTodo,
      completed: false,
      id: uuidv4(),
    };
    setTodo([...todo, newTodo]);
  }

  function deleteTodoHandler(index) {
    setTodo(todo.filter((todo) => todo.id !== index));
  }

  function toggleTodoHandler(id) {
    setTodo(
      todo.map((todo) => {
        return todo.id === id
          ? { ...todo, completed: !todo.completed }
          : { ...todo };
      })
    );
  }

  function resetTodoHandler() {
    setTodo([]);
  }

  function deleteCompletedHandler() {
    setTodo(todo.filter((todo) => !todo.completed));
  }

  const completedCounter = todo.filter((todo) => todo.completed).length;

  return (
    <div className="App">
      <h1 className="header">TODO LIST</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todo.length && (
        <TodoAction
          resetTodo={resetTodoHandler}
          deleteCompleted={deleteCompletedHandler}
          completedCounter={!!completedCounter}
        />
      )}
      <TodoList
        text={todo}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {!!completedCounter && (
        <h1>{`You have completed ${completedCounter}  ${
          completedCounter > 1 ? 'todos' : 'todo'
        }`}</h1>
      )}
    </div>
  );
}

export default App;
