import * as React from "react";

export const AppContext = React.createContext({
  activeRoute: {
    name: "",
    path: "",
  },
});

export const AppProvider = ({ children }) => {
  const [activeRoute, setActiveRoute] = React.useState({
    name: "",
    path: "",
  });

  return (
    <AppContext.Provider value={{ activeRoute, setActiveRoute }}>
      {children}
    </AppContext.Provider>
  );
};
