import '@/components/Header/index.less';
import { FC } from 'react';

const Header: FC<any> = () => {
  return (
    <div className="header">
      <div className="header-background" data-cy="header-background">
        <div className="header-title" data-cy="header-title">
          To Do List App
        </div>
      </div>
    </div>
  );
};

export default Header;
