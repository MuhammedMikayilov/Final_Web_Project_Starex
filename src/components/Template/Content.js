import * as React from "react";
// import { SidebarContext } from "@contexts";

export const Content = ({ children }) => {
  // const { mode } = React.useContext(SidebarContext);
  return (
    <section
      className={`frame-content ${
        mode === "opened" ? "sidebar-opened" : "sidebar-closed"
      }`}
    >
      {children}
    </section>
  );
};
