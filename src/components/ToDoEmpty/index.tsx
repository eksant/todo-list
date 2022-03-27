import '@/components/ToDoEmpty/index.less';
import imgToDoEmpty from '@/assets/images/todo-empty-state.svg';
import { FC } from 'react';

const ToDoEmpty: FC<any> = () => {
  return (
    <div className="todo-empty-state" data-cy="todo-empty">
      <img src={imgToDoEmpty} alt="todo-empty" />
    </div>
  );
};

export default ToDoEmpty;
