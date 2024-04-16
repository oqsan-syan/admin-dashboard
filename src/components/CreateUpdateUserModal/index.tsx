import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@mui/material';
import { validationSchema } from './schema';

import { UserForm } from 'types/User';
import { createUser, updateUser } from 'store/users/users-slice';

import { CancelButton, ConfirmationButton, CustomDialog } from 'components/styles/modalStyles';
import { ErrorText, Label } from 'components/styles/formStyles';

interface CreateUpdateUserModalProps {
  open: boolean;
  onClose: () => void;
  variant: 'create' | 'edit';
  currentUser?: { userFields: UserForm; id: string } | null;
}

const initialValues: UserForm = {
  name: '',
  email: '',
  phoneNumber: '',
};

const CreateUpdateUserModal: FC<CreateUpdateUserModalProps> = ({
  open,
  onClose,
  variant,
  currentUser,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = (values: UserForm, { resetForm }: { resetForm: () => void }) => {
    if (variant === 'create') {
      dispatch(createUser({ id: uuidv4(), ...values }));
    } else if (currentUser?.id) {
      dispatch(updateUser({ id: currentUser.id, ...values }));
    }

    resetForm();
    onClose();
  };

  return (
    <CustomDialog open={open} onClose={onClose}>
      <DialogTitle>{variant === 'edit' ? 'Update' : 'Create'} User</DialogTitle>

      <DialogContent>
        <Formik
          initialValues={
            variant === 'edit' && currentUser ? currentUser?.userFields : initialValues
          }
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, isValid }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Label>
                    Name <sup>*</sup>
                  </Label>
                  <Field name='name' as={TextField} fullWidth required placeholder='Name' />
                  <ErrorMessage name='name'>{(msg) => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
                </Grid>
                <Grid item xs={12}>
                  <Label>
                    Email <sup>*</sup>
                  </Label>
                  <Field name='email' as={TextField} fullWidth placeholder='Email' />
                  <ErrorMessage name='email'>{(msg) => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
                </Grid>
                <Grid item xs={12}>
                  <Label>Phone Number</Label>
                  <Field name='phoneNumber' as={TextField} fullWidth placeholder='Phone Number' />
                </Grid>
                <Grid item xs={12}>
                  <Label>Age</Label>
                  <Field name='age' as={TextField} fullWidth placeholder='Age' />
                  <ErrorMessage name='age'>{(msg) => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
                </Grid>

                <Grid item xs={12}>
                  <DialogActions>
                    <CancelButton onClick={onClose}>Cancel</CancelButton>
                    <ConfirmationButton
                      type='submit'
                      disabled={!values.name || !values.email || !isValid}
                    >
                      {variant === 'create' ? 'Create' : 'Edit'}
                    </ConfirmationButton>
                  </DialogActions>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </CustomDialog>
  );
};

export default CreateUpdateUserModal;
