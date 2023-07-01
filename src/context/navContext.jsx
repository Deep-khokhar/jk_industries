import { useContext, useState, createContext } from "react";
const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [nav, setNav] = useState("home");
  return (
    <NavContext.Provider value={[nav, setNav]}>{children}</NavContext.Provider>
  );
};

//custom hook
const useNav = () => useContext(NavContext);

export { useNav, NavProvider };
