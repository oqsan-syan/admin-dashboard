import { Box, Button, Container, Snackbar, styled } from '@mui/material';

export const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: '15px',
  background: '#9395D3',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  color: '#FFF',
  fontSize: '20px',
  fontWeight: 600,
  height: '65px',
  width: '100%',
  ':hover': {
    background: '#6466a3',
  },
  [theme.breakpoints.down('md')]: {
    fontWeight: 400,
    height: '45px',
    fontSize: '18px',
  },
}));

export const CustomContainer = styled(Container)(() => ({
  marginTop: '100px',
}));

export const ErrorSnackbar = styled(Snackbar)(() => ({
  '& .MuiSnackbarContent-root': {
    background: 'red',
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: '20px',
  },
}));

export const Greeting = styled(Box)(() => ({
  marginBottom: '36px',
  textAlign: 'center',
}));
