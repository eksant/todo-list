import '@/components/ConfirmDelete/index.less';
import iconWarning from '@/assets/images/icon-warning.svg';

import { FC } from 'react';
import { Button } from '@/components';
import { ConfirmType } from '@/models';

interface Props {
  name?: string;
  isOpen: boolean;
  dataCy?: string;
  dataCyCancel?: string;
  dataCyDelete?: string;
  confirmType: ConfirmType;
  onClose?: () => void;
  onConfirm?: () => void;
}

const ConfirmDelete: FC<Props> = ({
  name,
  isOpen,
  dataCy,
  confirmType,
  dataCyCancel,
  dataCyDelete,
  onClose,
  onConfirm,
}) => {
  return (
    <div
      data-cy={dataCy}
      className="outer"
      style={{ display: isOpen ? 'block' : 'none' }}
    >
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
            dataCy={dataCyCancel}
            className="modal-button btn-secondary"
          >
            Batal
          </Button>
          <Button
            onClick={onConfirm}
            className={dataCyDelete}
            dataCy="modal-delete-confirm-button"
          >
            Hapus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
