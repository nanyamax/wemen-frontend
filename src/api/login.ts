import apiInstance from '.';
import { ApiEndpoints } from '../common/constants';
import { ILoginData } from '../common/types';

const LoginApi = async (data: ILoginData) => {
  return apiInstance.post(ApiEndpoints.Login, data).then((response) => {
    return response.data;
  });
};

export default LoginApi;
