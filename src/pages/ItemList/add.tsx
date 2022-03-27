import '@/pages/ItemList/index.less';
import iconClose from '@/assets/images/icon-close.svg';

import { FC } from 'react';
import { Button } from '@/components';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AddItem: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <div className="add-item" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="add-item-overlay" onClick={onClose} />
      <div className="add-item-modal">
        <div className="add-item-modal-header">
          <div className="add-item-modal-header-title">Tambah List Item</div>
          <img
            alt="close"
            src={iconClose}
            onClick={onClose}
            className="add-item-modal-header-close"
          />
        </div>
        <div className="add-item-modal-body">
          <div>
            <label data-cy="modal-add-name-title">NAMA LIST ITEM</label>
            <div data-cy="modal-add-name-input">
              <input
                className="form-control"
                placeholder="Tambahkan nama Activity"
              />
            </div>
          </div>
        </div>
        <div className="add-item-modal-footer">
          <Button className="modal-button btn-primary">Simpan</Button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
