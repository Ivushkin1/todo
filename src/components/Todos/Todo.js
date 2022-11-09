import styles from './Todo.module.css';
import { TbCircle, TbCheck, TbTrashX } from 'react-icons/tb';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.main} ${todo.completed ? styles.completedTodo : ''}`}
    >
      <TbCircle className={styles.iconTodo} />
      <div className={styles.todoText}>{todo.text}</div>
      <TbTrashX
        className={styles.iconTrash}
        onClick={() => deleteTodo(todo.id)}
      />
      <TbCheck
        className={styles.iconCheck}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
}
export default Todo;
