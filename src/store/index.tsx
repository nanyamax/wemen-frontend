import React from 'react';
import Context from './Context';
import { isUserLoggedIn } from './useCheckUser';
import { IUserProfile } from '../common/types';

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<IUserProfile | null>(null);

  React.useEffect(() => {
    setIsLoggedIn(isUserLoggedIn());
  }, []);

  return (
    <Context.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
