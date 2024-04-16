import { TextField, Typography, styled } from '@mui/material';

export const Input = styled(TextField)(() => ({
  background: '#FFFFFF',
  border: '1px solid #DEE2E6',
  boxShadow: 'inset 0px 3px 0px rgba(66, 77, 138, 0.08)',
  borderRadius: '8px',
  color: '#343A40',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  '::placeholder': {
    color: 'red',
  },
  ':hover': {
    border: '1px solid #ADB5BD',
    boxShadow: 'inset 0px 6px 0px rgba(66, 77, 138, 0.06)',
  },
  '& .Mui-error': {
    borderColor: '#DA2F40 !important',
  },
  '& .Mui-focused': {
    boxShadow: '0px 6px 0px 0px rgba(66, 77, 138, 0.06) inset',
  },
  '& .MuiFormLabel-root': {
    display: 'none',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
    boxShadow: 'none',
  },
}));

export const Label = styled(Typography)(() => ({
  color: '#636568',
  fontSize: '14px',
  marginBottom: '6px',
  sup: {
    color: 'red',
  },
}));

export const ErrorText = styled(Typography)(() => ({
  color: '#dc1212',
  fontSize: '12px',
  marginTop: '4px',
}));
