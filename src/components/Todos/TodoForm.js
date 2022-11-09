import styles from './TodoForm.module.css';
import { useRef } from 'react';
import Button from '../UI/Button';

function TodoForm({ addTodo }) {
  const todoRef = useRef();

  function submit(e) {
    e.preventDefault();
    const inputValue = todoRef.current.value;
    if (inputValue) {
      addTodo(inputValue);
      todoRef.current.value = '';
    }
  }

  return (
    <div className={styles.todoForm}>
      <form onSubmit={submit}>
        <input ref={todoRef} type="text" placeholder="Enter new todo" />
        <Button child={'Submit'} title="Submit" />
      </form>
    </div>
  );
}

export default TodoForm;
