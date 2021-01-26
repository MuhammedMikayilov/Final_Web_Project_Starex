import * as React from "react";
import {Link} from "react-router-dom";
import {InitialState} from "@components/Template/actions";
import HeaderTop from "@components/Template/components/HeaderTop";
import HeaderBottom from "@components/Template/components/HeaderBottom";
import {HeaderNavbar} from "@config";

export const Header = () => {

    const renderLinks = () => {
        return HeaderNavbar.map((link, key) => (
            link.isNavbar &&
            <li
                className="nav-item mr-4"
                key={key}
            >
                <Link
                    to={link.path}
                ><h4 className="text-white">{link.name}</h4></Link>
            </li>
        ));
    };

  return (
      <header>
         <HeaderTop />
        <HeaderBottom />
          <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#005fb5"}}>
              <div className="container">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"/>
                  </button>
                  <div className="collapse navbar-collapse row" id="navbarNav">
                      <ul className="navbar-nav">
                          {renderLinks()}
                      </ul>
                  </div>
              </div>
          </nav>
      </header>
  );
};
