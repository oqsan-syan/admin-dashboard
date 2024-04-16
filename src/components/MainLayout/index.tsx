import { useState, FC, ReactNode } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

import {
  Box,
  Toolbar,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Container,
  Tooltip,
  Avatar,
} from '@mui/material';

import CreateUpdateUserModal from 'components/CreateUpdateUserModal';

import { CustomAppBar, CustomListItem, CustomListItemSmall, NavigationTitle } from './style';

interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleLogOut = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  const handleCreateUser = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  };

  return (
    <>
      <CustomAppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                color='inherit'
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Drawer open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
                <List>
                  <CustomListItemSmall disablePadding>
                    <Link to='/dashboard'>
                      <ListItemButton>
                        <ListItemText primary={'Admin Dashboard'} />
                      </ListItemButton>
                    </Link>
                  </CustomListItemSmall>
                  <CustomListItemSmall disablePadding>
                    <Link to='/users-list'>
                      <ListItemButton>
                        <ListItemText primary={'Users List'} />
                      </ListItemButton>
                    </Link>
                  </CustomListItemSmall>
                  <CustomListItemSmall disablePadding>
                    <ListItemButton onClick={handleCreateUser}>
                      <ListItemText primary={'Create User'} />
                    </ListItemButton>
                  </CustomListItemSmall>
                </List>
                <Divider />
                <List>
                  <CustomListItemSmall disablePadding>
                    <ListItemButton onClick={handleLogOut}>
                      <ListItemText primary={'Log Out'} />
                    </ListItemButton>
                  </CustomListItemSmall>
                </List>
              </Box>
            </Drawer>

            <NavigationTitle variant='h6' noWrap sx={{ display: { xs: 'none', md: 'flex' } }}>
              Admin Dashboard
            </NavigationTitle>

            <List sx={{ display: { xs: 'none', md: 'flex' }, width: '50%' }}>
              <CustomListItem disablePadding>
                <Link to='/dashboard'>
                  <ListItemButton>
                    <ListItemText primary={'Admin Panel'} />
                  </ListItemButton>
                </Link>
              </CustomListItem>
              <CustomListItem disablePadding>
                <Link to='/users-list'>
                  <ListItemButton>
                    <ListItemText primary={'Users List'} />
                  </ListItemButton>
                </Link>
              </CustomListItem>
              <CustomListItem disablePadding>
                <ListItemButton onClick={handleCreateUser}>
                  <ListItemText primary={'Create User'} />
                </ListItemButton>
              </CustomListItem>
              <CustomListItem disablePadding>
                <ListItemButton onClick={handleLogOut}>
                  <ListItemText primary={'Log Out'} />
                </ListItemButton>
              </CustomListItem>
            </List>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt='Admin' />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </CustomAppBar>
      <Container maxWidth='lg' sx={{ marginTop: '70px', textAlign: 'center' }}>
        {children}
      </Container>
      <CreateUpdateUserModal
        open={openCreateModal}
        onClose={handleCloseCreateModal}
        variant='create'
      />
    </>
  );
};
export default MainLayout;
