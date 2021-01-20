import * as React from "react";
import { AppContext, SidebarContext } from "@contexts";
import { Lang } from "@plugins";

export const Footer = () => {
    const name = {
        footer: "Footer"
    };

    const [state, setState] = React.useState(name)
    const { mode, setMode } = React.useContext(SidebarContext);
    const { activeRoute } = React.useContext(AppContext);
    return (
        <footer className="frame-header">
            <div className="row h-100 m-0 p-2">
                <div className="col-12 d-flex align-items-center">
                    <h1 className="title mb-0 ml-auto mr-auto">
                        {state.footer}
                    </h1>
                </div>
            </div>
        </footer>
    );
};
