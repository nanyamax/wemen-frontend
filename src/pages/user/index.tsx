import { useNavigate } from 'react-router-dom';
import useStore from '../../store/useStore';

const UserPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useStore();

  if (isLoggedIn) {
    navigate('/dashboard');
  } else {
    navigate('/login');
  }

  return <></>;
};

export default UserPage;
