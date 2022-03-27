import '@/components/ConfirmDelete/index.less';
import iconWarning from '@/assets/images/icon-warning.svg';

import { FC } from 'react';
import { Button } from '@/components';
import { ConfirmType } from '@/models';

interface Props {
  name?: string;
  isOpen: boolean;
  confirmType: ConfirmType;
  onClose?: () => void;
  onConfirm?: () => void;
}

const ConfirmDelete: FC<Props> = ({
  name,
  isOpen,
  confirmType,
  onClose,
  onConfirm,
}) => {
  return (
    <div className="outer" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
        <div className="modal-header">
          <img src={iconWarning} alt="warning" data-cy="modal-delete-icon" />
        </div>
        <div className="modal-body" data-cy="modal-delete-title">
          Apakah anda yakin menghapus {confirmType}
          {name ? <b> {name}?</b> : ''}
        </div>
        <div className="modal-footer">
          <Button
            onClick={onClose}
            data-cy="modal-delete-cancel-button"
            className="modal-button btn-secondary"
          >
            Batal
          </Button>
          <Button
            onClick={onConfirm}
            className="modal-button btn-danger"
            data-cy="modal-delete-confirm-button"
          >
            Hapus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
