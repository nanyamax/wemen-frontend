import React from 'react';
import { IUserProfile } from '../common/types';

const Context = React.createContext<{
  isLoggedIn: IUserProfile | null;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<IUserProfile | null>>;
}>({
  isLoggedIn: null,
  setIsLoggedIn: () => {},
});

export default Context;
