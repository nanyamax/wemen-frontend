import { useMutation } from 'react-query';
import SignupApi from '../../../api/singup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TApiError } from '../../../common/types';
import { apiErrorToast } from '../../../common/utils';
import { useNavigate } from 'react-router-dom';

const useSingup = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation('singup', SignupApi, {
    onSuccess: (response) => {
      if (response?.firstName) {
        toast.success('Account created successfully');
        navigate('/');
      } else {
        toast.error('An error occured while creating your account');
      }
    },
    onError: (error: TApiError) => apiErrorToast(error),
  });

  return { signup: mutate, isLoading };
};

export default useSingup;
