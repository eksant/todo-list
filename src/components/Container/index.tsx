import '@/components/Container/index.less';
import { FC } from 'react';

const Container: FC<any> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
