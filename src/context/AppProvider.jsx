import {createContext, useState} from "react";

const Context = createContext({});
const AppProvider = ({children}) => {
  const [hidenLoading, setHidenLoading] = useState(true);
  return (
    <Context.Provider value={{setHidenLoading, hidenLoading}}>
      {children}
    </Context.Provider>
  );
};
export {Context};
export default AppProvider;
