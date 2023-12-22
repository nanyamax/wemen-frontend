import React from 'react';
import Context from './Context';

const useStore = () => {
  return React.useContext(Context);
};
export default useStore;
