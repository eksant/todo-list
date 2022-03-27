import '@/components/ActivityItem/index.less';
import moment from 'moment';
import iconDelete from '@/assets/images/icon-delete.svg';

import { FC } from 'react';
import { IActivity } from '@/models';
import { Link } from 'react-router-dom';

interface Props {
  onLinkTo: string;
  activity: IActivity;
  onDelete: (activity: IActivity) => void;
  onSelected?: (activity: IActivity) => void;
}

const ActivityItem: FC<Props> = ({ activity, onLinkTo, onDelete }) => {
  return (
    <div className="activity-item">
      <Link to={onLinkTo}>
        <div className="activity-item-body">
          <div className="activity-item-title">{activity.title}</div>
        </div>
      </Link>
      <div className="activity-item-footer">
        <span>{moment(activity.created_at).format('DD MMMM YYYY')}</span>
        <img
          alt="delete"
          src={iconDelete}
          className="activity-item-delete"
          onClick={() => onDelete(activity)}
        />
      </div>
    </div>
  );
};

export default ActivityItem;
