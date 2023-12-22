import { ISignupData } from '../common/types';

export const isUserLoggedIn = () => {
  const user = localStorage.getItem('wemen-user');
  return user;
};

export const loginUser = (data: ISignupData) => {
  localStorage.setItem('wemen-user', JSON.stringify(data));
};
