import { useMutation } from 'react-query';
import LoginApi from '../../../api/login';
import { toast } from 'react-toastify';
import useStore from '../../../store/useStore';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../store/useCheckUser';

const useLogin = () => {
  const { setIsLoggedIn } = useStore();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation('login', LoginApi, {
    onSuccess: (response) => {
      if (response?.email && response?.firstName) {
        loginUser(response as any);
        setIsLoggedIn(response);
        toast.success('You have signed in successfully', {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate('/user');
      } else {
        toast.error('An error occured while creating your account', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { login: mutate, isLoading };
};

export default useLogin;
