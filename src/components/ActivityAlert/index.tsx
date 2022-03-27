import '@/components/ActivityAlert/index.less';
import { FC } from 'react';
import iconInformation from '@/assets/images/icon-information.svg';

interface Props {
  isOpen: boolean;
  onClose?: () => void;
}

const ActivityAlert: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <div
      className="alert"
      data-cy="modal-information"
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div className="alert-overlay" onClick={onClose} />
      <div className="alert-modal">
        <div className="alert-modal-body">
          <div className="alert-modal-icon">
            <img src={iconInformation} alt="information" />
          </div>
          <div
            className="alert-modal-message"
            data-cy="modal-information-title"
          >
            Activity berhasil dihapus
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityAlert;
