import '@/pages/Dashboard/index.less';
import iconPlus from '@/assets/images/icon-plus.svg';

import { useData } from '@/services';
import { FC, useEffect, useState } from 'react';
import { ConfirmType, IActivity } from '@/models';
import {
  Button,
  Loading,
  ActivityItem,
  ActivityAlert,
  ActivityEmpty,
  ActivityTitle,
  ConfirmDelete,
} from '@/components';

const Dashboard: FC<any> = () => {
  const { onFetchData, onPostData, onDelData } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email] = useState('eksant%40gmail.com');
  const [skeleton, setSkeleton] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activity, setActivity] = useState<IActivity>();
  const [activities, setActivities] = useState<IActivity[]>([]);

  const refresh = async () => {
    setSkeleton(true);
    const result = await onFetchData(`activity-groups?email=${email}`);

    if (result.status === 200) {
      setActivities(result.data.data);
    }

    setSkeleton(false);
  };

  const onNewActivity = async () => {
    setLoading(true);
    const payload = { title: 'New Activity', email: 'eksant@gmail.com' };
    await onPostData('activity-groups', payload);

    refresh();
    setLoading(false);
  };

  const onSetActivity = (activity: IActivity) => {
    setActivity(activity);
    setIsOpen(true);
  };

  const onConfirmDelActivity = async () => {
    if (activity?.id) {
      setIsOpen(false);
      const result = await onDelData(`activity-groups/${activity.id}`);

      if (result) {
        setIsSuccess(true);
      }

      refresh();
    }
  };

  useEffect(() => {
    (async () => {
      setSkeleton(true);
      const result = await onFetchData(`activity-groups?email=${email}`);

      if (result.status === 200) {
        setActivities(result.data.data);
      }

      setSkeleton(false);
    })();
  }, [email, onFetchData]);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <ActivityTitle>Activity</ActivityTitle>
        <Button
          icon={iconPlus}
          loading={loading}
          onClick={onNewActivity}
          dataCy="activity-add-button"
        >
          Tambah
        </Button>
      </div>

      {skeleton ? (
        <Loading size={32} />
      ) : activities.length < 1 ? (
        <ActivityEmpty />
      ) : (
        <div className="row">
          {activities.map((activity: IActivity, idx: number) => (
            <div
              className="col"
              key={activity.id}
              data-cy={`activity-item-${idx}`}
            >
              <ActivityItem
                activity={activity}
                onLinkTo={`/detail/${activity.id}`}
                onDelete={(data: IActivity) => onSetActivity(data)}
              />
            </div>
          ))}
        </div>
      )}

      <ConfirmDelete
        isOpen={isOpen}
        name={activity?.title}
        confirmType={ConfirmType.Activity}
        onClose={() => setIsOpen(false)}
        onConfirm={onConfirmDelActivity}
      />

      <ActivityAlert isOpen={isSuccess} onClose={() => setIsSuccess(false)} />
    </div>
  );
};

export default Dashboard;
