import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { usersSelector } from 'store/users/users-slice';

import { User, UserForm } from 'types/User';

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
  Typography,
  Tooltip,
  IconButton,
  TableContainer,
  Paper,
} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import CreateUpdateUserModal from 'components/CreateUpdateUserModal';
import DeleteUserModal from 'components/DeleteUserModal';
import { CustomTableCell, EmptyBox, HeaderCell } from './style';

const tableFields: { value: keyof User; label: string }[] = [
  {
    value: 'name',
    label: 'Name',
  },
  {
    value: 'email',
    label: 'Email',
  },
  {
    value: 'phoneNumber',
    label: 'Phone Number',
  },
  {
    value: 'age',
    label: 'Age',
  },
];

const UsersList: FC = () => {
  const users = useSelector(usersSelector);

  const [updateModal, setUpdateModal] = useState<{
    open: boolean;
    currentUser: { userFields: UserForm; id: string } | null;
  }>({
    open: false,
    currentUser: null,
  });
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null);

  const handleEditUser = (user: User) => {
    const { id, ...userFields } = user;
    setUpdateModal({ open: true, currentUser: { id, userFields } });
  };

  const handleCloseEditModal = () => {
    setUpdateModal({
      open: false,
      currentUser: null,
    });
  };

  const handleDeleteUser = (id: string) => {
    setDeletingUserId(id);
  };

  const handleCloseDeleteModal = () => {
    setDeletingUserId(null);
  };

  return (
    <Container maxWidth='lg'>
      <Typography variant='h4' mb={6}>
        Users List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {tableFields.map((field) => (
                <HeaderCell key={field.value}>{field.label}</HeaderCell>
              ))}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length ? (
              users.map((user) => (
                <TableRow key={user.id}>
                  {tableFields.map((field) => (
                    <CustomTableCell key={`${field.value}-${user.id}`}>
                      {user[field.value]}
                    </CustomTableCell>
                  ))}
                  <CustomTableCell>
                    <Tooltip title='Edit User'>
                      <IconButton onClick={() => handleEditUser(user)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Delete User'>
                      <IconButton onClick={() => handleDeleteUser(user.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </CustomTableCell>
                </TableRow>
              ))
            ) : (
              <TableCell colSpan={5}>
                <EmptyBox>Users List is Empty</EmptyBox>
              </TableCell>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <CreateUpdateUserModal
        open={updateModal.open}
        onClose={handleCloseEditModal}
        variant={'edit'}
        currentUser={updateModal.currentUser}
      />
      <DeleteUserModal userId={deletingUserId} onClose={handleCloseDeleteModal} />
    </Container>
  );
};

export default UsersList;
