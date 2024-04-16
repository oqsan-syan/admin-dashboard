import { FC } from 'react';

import { useDispatch } from 'react-redux';
import { removeUser } from 'store/users/users-slice';

import { DialogActions, DialogContent, DialogTitle } from '@mui/material';

import { CancelButton, ConfirmationButton, CustomDialog } from 'components/styles/modalStyles';

interface DeleteUserModalProps {
  userId: null | string;
  onClose: () => void;
}

const DeleteUserModal: FC<DeleteUserModalProps> = ({ userId, onClose }) => {
  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    userId && dispatch(removeUser(userId));
    onClose();
  };

  return (
    <CustomDialog open={!!userId} onClose={onClose}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>Are you sure you want to delete this user?</DialogContent>
      <DialogActions>
        <CancelButton onClick={onClose} color='primary'>
          Cancel
        </CancelButton>
        <ConfirmationButton onClick={handleDeleteUser} color='secondary'>
          Delete
        </ConfirmationButton>
      </DialogActions>
    </CustomDialog>
  );
};

export default DeleteUserModal;
