import * as React from "react";

export const SidebarContext = React.createContext({
  mode: false,
  toogle: false,
});

export const SidebarProvider = ({ children }) => {
  const [mode, setMode] = React.useState("closed");

  return (
    <SidebarContext.Provider value={{ mode, setMode }}>
      {children}
    </SidebarContext.Provider>
  );
};
