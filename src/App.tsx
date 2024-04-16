import { Route, Routes } from 'react-router-dom';

import Login from 'pages/Login';
import AdminDashboard from 'pages/AdminDashboard';
import UsersList from 'pages/UsersList';

import useAuth from 'utils/hooks/useAuth';
import MainLayout from 'components/MainLayout';

function App() {
  useAuth();

  return (
    <Routes>
      <Route path='/' element={<Login />} />

      <Route
        path='/dashboard'
        element={
          <MainLayout>
            <AdminDashboard />
          </MainLayout>
        }
      ></Route>
      <Route
        path='/users-list'
        element={
          <MainLayout>
            <UsersList />
          </MainLayout>
        }
      ></Route>
    </Routes>
  );
}

export default App;
