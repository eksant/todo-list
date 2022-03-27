import '@/components/ToDoItem/index.less';
import iconDelete from '@/assets/images/icon-delete.svg';

import { FC } from 'react';
import { IToDo } from '@/models';

interface Props {
  todo: IToDo;
  onClick?: () => void;
  onDelete: (todo: IToDo) => void;
}

const ToDoItem: FC<Props> = ({ todo, onClick, onDelete }) => {
  return (
    <div className="todo-item">
      <div className="todo-item-title" data-cy="todo-item-title">
        {todo.title}
        <div className="todo-icon-edit"></div>
      </div>

      <img
        alt="delete"
        src={iconDelete}
        className="todo-item-delete"
        onClick={() => onDelete(todo)}
        data-cy="todo-item-delete-button"
      />
    </div>
  );
};

export default ToDoItem;
