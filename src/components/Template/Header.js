import * as React from "react";
import { AppContext, SidebarContext } from "@contexts";
import { Lang } from "@plugins";
import {Link} from "react-router-dom";
import {HeaderNavbar} from "@config";
import {useWindowDimensions} from "@hooks";
import {InitialState} from "@components/Template/actions";

export const Header = () => {
  const { mode, setMode } = React.useContext(SidebarContext);
  const { activeRoute } = React.useContext(AppContext);
    const dimensions = useWindowDimensions();

    const [state, useState] = React.useState(InitialState)

    const image = "./images/starexLogo.png"

    const renderLinks = () => {
        return HeaderNavbar.map((link, key) => (
            link.isHeader &&
            <li
                className="nav-item mr-4"
                onClick={() => dimensions.width < 1024 && setMode("closed")}
                key={key}
            >
                <Link
                    to={link.path}
                >{link.name}</Link>
            </li>
        ));
    };

    const renderPages = () => {
        return HeaderNavbar.map((link, key) => (
            link.isLoginPanel &&
            <li
                className="nav-item mr-4"
                onClick={() => dimensions.width < 1024 && setMode("closed")}
                key={key}
            >
                <Link
                    to={link.path}
                >{link.name}</Link>
            </li>
        ));
    };

    const navRender = ()=>{
        return state.data.map((item, key)=>(
            <li key={key} className='nav-item mr-3'>
                <div>
                    <i className={item.icon}/>
                    <span>{item.title}</span> <br/>
                    {item.startDate &&
                        <div>
                            <span> {item.startDate} - {item.endDate}</span> <br/>
                            <span>{item.startDateTime} - {item.endDateTime}</span> <br/>
                        </div>}

                </div>
            </li>
        ))
    }
  return (
      <header>
          <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#f7f7f7"}}>
              <div className="container">
                   <span className="icons">
                          <ul className='d-flex'>
                              <li className='mr-1'>
                                  <a className={'facebook'} href="https://www.facebook.com/" target="_blank">
                                      <i  className="fab fa-facebook"/>
                                  </a>
                              </li>
                              <li className='mr-1'>
                                  <a className={'instagram'} href="https://www.instagram.com/" target="_blank">
                                      <i className="fab fa-instagram-square"/>
                                  </a>
                              </li>
                          </ul>
                      </span>

                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"/>
                  </button>
                  <div className="collapse navbar-collapse row" id="navbarNav">
                      <ul className="navbar-nav col-md-9">
                          {renderLinks()}
                      </ul>

                      <div className='col-md-3'>
                          <ul className="navbar-nav">
                              {renderPages()}
                          </ul>
                      </div>
                  </div>
              </div>
          </nav>

          <nav className="navbar navbar-expand-lg bg-white py-0" style={{backgroundColor:"#f7f7f7"}}>
              <div className="container">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"/>
                  </button>
                  <div className="collapse navbar-collapse row" id="navbarNav">
                     <div className="logo col-md-6">
                         <Link to="/">
                             <img
                                 src={process.env.PUBLIC_URL+ image}
                                 style={{width:"100px", marginLeft:"20px"}}
                                 alt=" logo"
                             />
                         </Link>
                     </div>

                      <div className='col-md-6'>
                          <ul className='navbar-nav'>
                              {navRender()}
                          </ul>
                      </div>
                  </div>
              </div>
          </nav>
      </header>
  );
};
