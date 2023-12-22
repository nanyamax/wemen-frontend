import React from 'react';

const Context = React.createContext<{
  isLoggedIn: string | null;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<string | null>>;
}>({
  isLoggedIn: null,
  setIsLoggedIn: () => {},
});

export default Context;
