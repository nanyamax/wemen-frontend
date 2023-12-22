import apiInstance from '.';
import { ApiEndpoints } from '../common/constants';
import { ISignupData } from '../common/types';

const SignupApi = async (data: ISignupData) => {
  return apiInstance
    .post(ApiEndpoints.Signup, data)
    .then((response) => response.data);
};

export default SignupApi;
