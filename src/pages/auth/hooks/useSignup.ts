import { useMutation } from 'react-query';
import SignupApi from '../../../api/singup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useSingup = () => {
  const { mutate, isLoading } = useMutation('singup', SignupApi, {
    onSuccess: (response) => {
      console.log('Testee REsponse : ', response);
      if (response?.status === 'Done') {
        toast.success('Account created successfully', {
          position: toast.POSITION.TOP_RIGHT,
        });
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

  return { signup: mutate, isLoading };
};

export default useSingup;
