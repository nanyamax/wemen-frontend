import { AxiosError } from 'axios';

export interface ILoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface ISignupData {
  email: string;
  password: string;
  password2: string;
  maritalStatus: String;
  country: string;
  rememberMe: boolean;
}

export interface IUserProfile {
  firstName: string;
  lastName: String;
  email: string;
  country: string;
  maritalStatus: string;
}

export interface IApiErrorMessage {
  message: string;
}
export type TApiError = AxiosError<IApiErrorMessage>;
