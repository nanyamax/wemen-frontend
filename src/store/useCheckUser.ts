import { STORE_KEY } from '../common/constants';
import { ISignupData } from '../common/types';

export const isUserLoggedIn = () => {
  const user = localStorage.getItem(STORE_KEY);
  return user;
};

export const loginUser = (data: ISignupData) => {
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
};

export const logOutUser = () => {
  localStorage.removeItem(STORE_KEY);
};
