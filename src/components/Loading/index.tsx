import '@/components/Loading/index.less';
import { FC } from 'react';
import { ImSpinner9 } from 'react-icons/im';

interface Props {
  size?: number;
}

const Loading: FC<Props> = ({ size }) => {
  return <ImSpinner9 size={size} className="spinner" />;
};

export default Loading;
