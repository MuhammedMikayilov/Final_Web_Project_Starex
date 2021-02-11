import * as React from "react";
import {Link} from "react-router-dom";
import HeaderTop from "@components/Template/components/HeaderTop";
import HeaderBottom from "@components/Template/components/HeaderBottom";
import {HeaderNavbar} from "@config";
import HeaderMobile from "@components/Template/components/HeaderMobile";

export const Header = (props) => {

    const {renderLink, renderPages} = props;
    const [fadeAnimation, setAnimation] = React.useState(false)

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
          <HeaderMobile />
         {/*<HeaderTop renderLinks={renderLink} renderPages={renderPages}/>*/}
         <HeaderBottom renderLinks={renderLink} renderPages={renderPages}/>
          <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#005fb5"}}>
              <div className="container text-end">
                  <div onClick={()=>setAnimation(!fadeAnimation)} className='hamburger w-100 mb-3 d-block d-md-none'>
                      {!fadeAnimation ? <i className="fas fa-bars"/> : <i className="fas fa-times"/>}
                  </div>
                  <div className={`row ${fadeAnimation ? "showNav":"hideNav"}`} id="navbarNav">
                      <ul className="navbar-nav w-100 text-end">
                          {renderLinks()}
                      </ul>
                  </div>
              </div>
          </nav>
      </header>
  );
};
