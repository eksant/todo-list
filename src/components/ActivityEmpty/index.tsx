import '@/components/ActivityEmpty/index.less';
import imgActivityEmpty from '@/assets/images/activity-empty-state.svg';
import { FC } from 'react';

const ActivityEmpty: FC<any> = () => {
  return (
    <div className="activity-empty" data-cy="activity-empty">
      <div data-cy="todo-empty-state">
        <img src={imgActivityEmpty} alt="activity-empty" />
      </div>
    </div>
  );
};

export default ActivityEmpty;
