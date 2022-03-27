import '@/components/ToDoTitle/index.less';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  onBackTo: string;
}

const ToDoTitle: FC<Props> = ({ children, onBackTo }) => {
  return (
    <div className="todo">
      <NavLink to={onBackTo}>
        <div className="todo-icon-back"></div>
      </NavLink>
      <div className="todo-title">{children}</div>
      <div className="todo-icon-edit"></div>
    </div>
  );
};

export default ToDoTitle;
