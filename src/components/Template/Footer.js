import * as React from "react";
import { AppContext, SidebarContext } from "@contexts";
import { Lang } from "@plugins";

export const Footer = () => {
    const { mode, setMode } = React.useContext(SidebarContext);
    const { activeRoute } = React.useContext(AppContext);
    return (
        <footer className="frame-header">
            <div className="row h-100 m-0 p-2">
                <div className="col-12 d-flex align-items-center">
                    {/*<button*/}
                    {/*    className={`sidebar-toogler d-flex flex-column justify-content-center${*/}
                    {/*        mode === "opened" ? " toogled" : ""*/}
                    {/*    }`}*/}
                    {/*    onClick={() => setMode(mode === "opened" ? "closed" : "opened")}*/}
                    {/*>*/}
                    {/*    <span className="line" />*/}
                    {/*    <span className="line" />*/}
                    {/*    <span className="line" />*/}
                    {/*</button>*/}
                    <h1 className="title mb-0 ml-auto mr-auto">
                        {Lang.get(activeRoute.name)}
                    </h1>
                </div>
            </div>
        </footer>
    );
};
