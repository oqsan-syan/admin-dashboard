import { Box, TableCell, styled } from '@mui/material';

export const EmptyBox = styled(Box)(() => ({
  textAlign: 'center',
  margin: '40px 0',
  fontSize: '24px',
}));

export const HeaderCell = styled(TableCell)(() => ({
  fontSize: '18px',
}));

export const CustomTableCell = styled(TableCell)(() => ({
  fontSize: '16px',
}));
