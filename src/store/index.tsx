import React from 'react';
import Context from './Context';
import { isUserLoggedIn } from './useCheckUser';

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<string | null>(null);

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
