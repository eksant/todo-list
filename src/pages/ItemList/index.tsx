import '@/pages/ItemList/index.less';
import iconPlus from '@/assets/images/icon-plus.svg';
import AddToDo from '@/pages/ItemList/add';

import { FC, useEffect, useState } from 'react';
import { useData } from '@/services';
import { ConfirmType, IActivity, IToDo } from '@/models';
import {
  Button,
  Loading,
  ToDoItem,
  ToDoEmpty,
  ToDoTitle,
  ConfirmDelete,
} from '@/components';

const ItemList: FC<any> = (props) => {
  const { onFetchData, onPostData, onDelData } = useData();
  const [toDo, setToDo] = useState<IToDo>();
  const [isNew, setIsNew] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [skeleton, setSkeleton] = useState(false);
  const [toDos, setToDos] = useState<IToDo[]>([]);
  const [activity, setActivity] = useState<IActivity>();

  const refresh = async () => {
    setSkeleton(true);
    const result = await onFetchData(`todo-items?activity_group_id=4`);

    if (result.status === 200) {
      setToDos(result.data.data);
    }

    setSkeleton(false);
  };

  const onNewToDo = async () => {
    setLoading(true);
    setIsNew(true);
    setLoading(false);
  };

  const onSetToDo = (todo: IToDo) => {
    setToDo(todo);
    setIsOpen(true);
  };

  const onConfirmDelToDo = async () => {
    if (toDo?.id) {
      await onDelData(`todo-items/${toDo.id}`);

      refresh();
      setIsOpen(false);
    }
  };

  useEffect(() => {
    (async () => {
      setSkeleton(true);
      const activityId = props.match.params.id;
      const activity = await onFetchData(`activity-groups/${activityId}`);

      if (activity.status === 200) {
        setActivity(activity.data);
      }

      const todo = await onFetchData(
        `todo-items?activity_group_id=${activityId}`
      );

      if (todo.status === 200) {
        setToDos(todo.data.data);
      }

      setSkeleton(false);
    })();
  }, [onFetchData, props.match]);

  return (
    <div className="item-list">
      <div className="item-list-header">
        {!skeleton && <ToDoTitle onBackTo="/">{activity?.title}</ToDoTitle>}
        <Button icon={iconPlus} loading={loading} onClick={onNewToDo}>
          Tambah
        </Button>
      </div>

      {skeleton ? (
        <Loading size={32} />
      ) : toDos.length < 1 ? (
        <ToDoEmpty />
      ) : (
        toDos.map((todo: IToDo, idx: number) => (
          <ToDoItem
            todo={todo}
            key={todo.id}
            data-cy={`todo-item-${idx}`}
            onDelete={(data: IToDo) => onSetToDo(data)}
          />
        ))
      )}

      <AddToDo isOpen={isNew} onClose={() => setIsNew(false)} />

      <ConfirmDelete
        isOpen={isOpen}
        name={toDo?.title}
        confirmType={ConfirmType.ToDo}
        onConfirm={onConfirmDelToDo}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default ItemList;
