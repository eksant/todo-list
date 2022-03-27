import '@/pages/ItemList/index.less';
import iconPlus from '@/assets/images/icon-plus.svg';

import { FC, useEffect, useState } from 'react';
import { useData } from '@/services';
import { ConfirmType, IToDo } from '@/models';
import {
  Button,
  ConfirmDelete,
  Loading,
  ToDoEmpty,
  ToDoItem,
  ToDoTitle,
} from '@/components';

const ItemList: FC<any> = () => {
  const { onFetchData, onPostData, onDelData } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [skeleton, setSkeleton] = useState(false);
  const [toDo, setToDo] = useState<IToDo>();
  const [toDos, setToDos] = useState<IToDo[]>([]);

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
    const payload = { title: 'New Activity', email: 'eksant@gmail.com' };
    await onPostData('activity-groups', payload);

    refresh();
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
      const result = await onFetchData(`todo-items?activity_group_id=4`);

      if (result.status === 200) {
        setToDos(result.data.data);
      }

      setSkeleton(false);
    })();
  }, [onFetchData]);

  return (
    <div className="item-list">
      <div className="item-list-header">
        <ToDoTitle onBackTo="/">New Activity</ToDoTitle>
        <Button icon={iconPlus} loading={loading} onClick={onNewToDo}>
          Tambah
        </Button>
      </div>

      {skeleton ? (
        <Loading size={32} />
      ) : toDos.length < 1 ? (
        <ToDoEmpty />
      ) : (
        toDos.map((todo: IToDo) => (
          <ToDoItem
            todo={todo}
            key={todo.id}
            onDelete={(data: IToDo) => onSetToDo(data)}
          />
        ))
      )}

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
