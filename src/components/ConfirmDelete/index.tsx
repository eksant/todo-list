import '@/components/ConfirmDelete/index.less';
import { FC } from 'react';
import { Button } from '@/components';
import { ConfirmType } from '@/models';
import iconWarning from '@/assets/images/icon-warning.svg';

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
          <img src={iconWarning} alt="warning" />
        </div>
        <div className="modal-body">
          Apakah anda yakin menghapus {confirmType}
          {name ? <b> {name}?</b> : ''}
        </div>
        <div className="modal-footer">
          <Button className="modal-button btn-secondary" onClick={onClose}>
            Batal
          </Button>
          <Button className="modal-button btn-danger" onClick={onConfirm}>
            Hapus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
