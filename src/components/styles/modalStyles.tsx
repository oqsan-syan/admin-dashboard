import { Button, Dialog, styled } from '@mui/material';

export const ConfirmationButton = styled(Button)(() => ({
  background: '#9395D3',
  textTransform: 'capitalize',
  color: '#fff',
  fontSize: '18px',
  padding: '6px 24px',
  ':hover': {
    background: '#6466a3',
  },
}));

export const CancelButton = styled(Button)(() => ({
  textTransform: 'capitalize',
  color: '#000',
  fontSize: '18px',
  padding: '6px 24px',
}));

export const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    minWidth: '425px',
    padding: '20px 10px',
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto',
    },
  },
}));
