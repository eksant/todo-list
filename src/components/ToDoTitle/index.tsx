import '@/components/ToDoTitle/index.less';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  onBackTo: string;
}

const ToDoTitle: FC<Props> = ({ children, onBackTo }) => {
  return (
    <div className="todo">
      <NavLink to={onBackTo} data-cy="todo-back-button">
        <div className="todo-icon-back"></div>
      </NavLink>
      <div className="todo-title" data-cy="todo-title">
        {children}
      </div>
      <div className="todo-icon-edit" data-cy="todo-title-edit-button"></div>
    </div>
  );
};

export default ToDoTitle;
