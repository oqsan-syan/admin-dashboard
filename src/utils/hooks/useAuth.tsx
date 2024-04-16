import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
      navigate('/');
    }
  }, [navigate]);

  return;
};

export default useAuth;
