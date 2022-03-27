import '@/components/Button/index.less';
import { FC } from 'react';
import { Loading } from '@/components';

interface Props {
  icon?: any;
  className?: any;
  loading?: boolean;
  onClick?: () => void;
}

const Button: FC<Props> = ({ icon, className, loading, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`custom-button btn-primary ${className}`}
    >
      {loading ? (
        <Loading size={24} />
      ) : (
        <div className="custom-button-title">
          {icon && (
            <span className="custom-button-icon">
              <img src={icon} alt="icon" />
            </span>
          )}
          {children}
        </div>
      )}
    </button>
  );
};

export default Button;
