import { useMutation } from 'react-query';
import LoginApi from '../../../api/login';
import { toast } from 'react-toastify';
import useStore from '../../../store/useStore';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../store/useCheckUser';
import { IUserProfile, TApiError } from '../../../common/types';
import { apiErrorToast } from '../../../common/utils';

const useLogin = () => {
  const { setIsLoggedIn } = useStore();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation('login', LoginApi, {
    onSuccess: (response) => {
      if (response?.email && response?.firstName) {
        toast.success('You have signed in successfully');
        loginUser(response as IUserProfile);
        setIsLoggedIn(response);
        navigate('/');
      } else {
        toast.error('An error occured. Please try again');
      }
    },
    onError: (error: TApiError) => apiErrorToast(error),
  });

  return { login: mutate, isLoading };
};

export default useLogin;
