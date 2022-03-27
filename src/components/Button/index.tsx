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
      className={`activity-add-button btn-primary ${className}`}
    >
      {loading ? (
        <Loading size={24} />
      ) : (
        <div className="activity-add-button-title">
          {icon && (
            <span className="activity-add-button-icon">
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
