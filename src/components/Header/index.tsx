import '@/components/Header/index.less';
import { FC } from 'react';

const Header: FC<any> = () => {
  return (
    <div className="header" data-cy="header-background">
      <div className="container">
        <div className="header-title" data-cy="header-title">
          TO DO LIST APP
        </div>
      </div>
    </div>
  );
};

export default Header;
