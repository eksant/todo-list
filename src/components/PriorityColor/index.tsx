import '@/components/PriorityColor/index.less';
import { FC } from 'react';

const PriorityColor: FC<any> = ({ children }) => {
  return <div className="activity-title">{children}</div>;
};

export default PriorityColor;
