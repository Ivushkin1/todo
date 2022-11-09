import Button from '../UI/Button';
import { TbRefresh, TbTrashX } from 'react-icons/tb';

function TodoAction({ resetTodo, deleteCompleted, completedCounter }) {
  return (
    <>
      <Button child={<TbRefresh />} title="Reset Todo" onClick={resetTodo} />
      <Button
        disable={completedCounter}
        child={<TbTrashX />}
        title="Delete completed Todo"
        onClick={deleteCompleted}
      />
    </>
  );
}

export default TodoAction;
