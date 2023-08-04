import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { UserWrapper, UserOptions, UserName, UserAvatar } from './User.styled';
import defaultAvatar from '../../images/user-default-avatar.png';

export const UserProfile = ({ name, avatar }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <UserWrapper>
      <UserOptions type="button" onClick={handleOpenModal}>
        <UserName>{name}</UserName>
        {avatar ? (
          <UserAvatar src={avatar} alt={name} />
        ) : (
          <UserAvatar
            src={defaultAvatar}
            alt="Default Avatar"
            onClick={handleOpenModal}
            height={32}
            width={32}
          />
        )}
      </UserOptions>
      {showModal && <Modal onCloseModal={handleCloseModal} />}
    </UserWrapper>
  );
};
