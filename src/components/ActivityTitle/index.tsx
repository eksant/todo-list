import '@/components/ActivityTitle/index.less';
import { FC } from 'react';

const ActivityTitle: FC<any> = ({ children }) => {
  return (
    <div className="activity-title" data-cy="activity-title">
      {children}
    </div>
  );
};

export default ActivityTitle;
