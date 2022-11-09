import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ text, deleteTodo, toggleTodo }) {
  return (
    <>
      {!text.length && <h1 className={styles.list}>Todo list is empty</h1>}
      {text.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </>
  );
}

export default TodoList;
