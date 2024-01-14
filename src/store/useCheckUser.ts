import { STORE_KEY } from '../common/constants';
import { IUserProfile } from '../common/types';

export const isUserLoggedIn = (): IUserProfile | null => {
  const user = localStorage.getItem(STORE_KEY);
  return user ? JSON.parse(user) : null;
};

export const loginUser = (data: IUserProfile) => {
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
};

export const logOutUser = () => {
  localStorage.removeItem(STORE_KEY);
};
