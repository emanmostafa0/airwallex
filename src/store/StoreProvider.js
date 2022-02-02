import React from 'react';
import { object, func, node } from "prop-types";


const Store = React.createContext();

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
  );
};

StoreProvider.propTypes = {
  initialState: object,
  reducer: func,
  children: node
};
