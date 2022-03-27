import { api } from '@/utils';
import { FC, useContext, useCallback, createContext } from 'react';

const useValue = () => {
  const onFetchData = useCallback(async (endpoint: string) => {
    const result = await api.getAxios(endpoint);

    return result;
  }, []);

  const onPostData = useCallback(async (endpoint: string, data?: any) => {
    const result = await api.postAxios(endpoint, data);

    return result;
  }, []);

  const onDelData = useCallback(async (endpoint: string) => {
    const result = await api.delAxios(endpoint);

    return result;
  }, []);

  return { onFetchData, onPostData, onDelData };
};

const DataContext = createContext({} as ReturnType<typeof useValue>);
const useData = () => useContext(DataContext);
const DataProvider: FC<any> = (props) => {
  return <DataContext.Provider value={useValue()} {...props} />;
};

export { DataProvider, useData };
