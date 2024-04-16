import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { validationSchema } from './schema';
import { LoginFields } from 'types/LoginFields';

import { Grid, Typography } from '@mui/material';
import { CustomButton, CustomContainer, ErrorSnackbar, Greeting } from './style';
import { ErrorText, Input, Label } from 'components/styles/formStyles';

const initialValues: LoginFields = {
  userName: '',
  password: '',
};

const Login: FC = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<string>('');

  const handleSubmit = (values: LoginFields, { resetForm }: { resetForm: () => void }) => {
    if (values.userName === 'admin' && values.password === 'admin') {
      const authToken = 'mockAuthToken123';
      localStorage.setItem('authToken', authToken);

      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }

    resetForm();
  };

  return (
    <CustomContainer maxWidth='sm'>
      <Greeting>
        <Typography variant='h3' mb={2}>
          Login to your Account
        </Typography>
        <Typography variant='body1'>See what is going on with your business</Typography>
      </Greeting>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Label>
                  User Name <sup>*</sup>
                </Label>
                <Field name='userName' as={Input} fullWidth required placeholder='User Name' />
                <ErrorMessage name='userName'>{(msg) => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
              </Grid>
              <Grid item xs={12}>
                <Label>Password</Label>
                <Field name='password' as={Input} fullWidth placeholder='Password' />
                <ErrorMessage name='password'>{(msg) => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
              </Grid>

              <Grid item xs={12}>
                <CustomButton type='submit' disabled={!values.password || !values.userName}>
                  Login
                </CustomButton>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
      <ErrorSnackbar open={!!error} autoHideDuration={2000} message={error} />
    </CustomContainer>
  );
};

export default Login;
