import * as React from "react";
import { Link } from "react-router-dom";
import { useWindowDimensions } from "@hooks";
import { MENU_ROUTES } from "@config";
import { AppContext, SidebarContext } from "@contexts";

export const Sidebar = () => {
  const dimensions = useWindowDimensions();
  const { mode, setMode } = React.useContext(SidebarContext);
  const { activeRoute } = React.useContext(AppContext);

  const renderLinks = () => {
    return MENU_ROUTES.map((link, key) => (
      <li
        className="list-item"
        onClick={() => dimensions.width < 1024 && setMode("closed")}
        key={key}
      >
        <Link
          to={link.path}
          className={`link-item position-relative d-flex align-items-center justify-content-center${
            activeRoute.path.indexOf(link.path) !== -1 ? " active" : ""
          }`}
        >
          {link.icon}
          {mode === "opened" && <span className="ml-3 w-100">{link.name}</span>}
        </Link>
      </li>
    ));
  };

  return (
    <>
      {dimensions.width < 1024 && mode === "opened" && (
        <div className="sidebar-backdrop" onClick={() => setMode("closed")} />
      )}
      <aside className={`frame-sidebar ${mode}`}>
        <nav className="navbar-main">
          <ul className="m-0 p-0">{renderLinks()}</ul>
        </nav>
      </aside>
    </>
  );
};
