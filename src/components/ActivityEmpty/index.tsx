import '@/components/ActivityEmpty/index.less';
import imgActivityEmpty from '@/assets/images/activity-empty-state.svg';
import { FC } from 'react';

const ActivityEmpty: FC<any> = () => {
  return (
    <div className="activity-empty">
      <img src={imgActivityEmpty} alt="activity-empty" />
    </div>
  );
};

export default ActivityEmpty;
