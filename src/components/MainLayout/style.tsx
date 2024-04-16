import { AppBar, ListItem, Typography, styled } from '@mui/material';

export const CustomAppBar = styled(AppBar)(() => ({
  background: '#9395D3',
}));

export const NavigationTitle = styled(Typography)(() => ({
  marginRight: 'px',
  fontWeight: 600,
  color: 'inherit',
  textDecoration: 'none',
}));

export const CustomListItem = styled(ListItem)(() => ({
  color: '#fff',
  textWrap: 'nowrap',
  a: {
    color: '#fff',
    textDecoration: 'none',
    textWrap: 'nowrap',
  },
}));

export const CustomListItemSmall = styled(ListItem)(() => ({
  color: '#000',
  textWrap: 'nowrap',
  a: {
    color: '#000',
    textDecoration: 'none',
    textWrap: 'nowrap',
  },
}));
