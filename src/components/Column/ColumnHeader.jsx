import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteColumn } from 'store/boards/operations';

import { Icon } from 'components/Icons';
import Modal from 'components/Modal/Modal';
import EditColumnModal from 'components/AddColumn/EditColumnModal';

import { Card, CardHeader, IconButton } from '@mui/material';
import { card } from 'styles';

const ColumnHeader = ({ title, columnId }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteColumn = () => {
    if (window.confirm(`Do you really want to delete column ${title}?`)) {
      dispatch(deleteColumn(columnId));
    }
  };

  return (
    <Card sx={card.header}>
      <CardHeader
        title={title}
        sx={card.headerText}
        disableTypography
        action={
          <div>
            <IconButton onClick={handleOpenModal}>
              <Icon id={'pencil'} />
            </IconButton>
            <IconButton onClick={handleDeleteColumn}>
              <Icon id={'trash'} />
            </IconButton>
          </div>
        }
      />

      {showModal && (
        <Modal isOpenModal={showModal} onCloseModal={handleCloseModal}>
          <EditColumnModal
            onCloseModal={handleCloseModal}
            columnId={columnId}
            title={title}
            type="Submit"
          />
        </Modal>
      )}
    </Card>
  );
};
export default ColumnHeader;
