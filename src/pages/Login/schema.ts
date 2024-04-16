import { object, string } from 'yup';

export const validationSchema = object({
  userName: string().required('User Name is required'),
  password: string().required('Password is required'),
});
