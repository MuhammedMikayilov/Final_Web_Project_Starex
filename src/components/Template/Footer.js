import * as React from "react";
import {InitialStateBios} from "@components/Template/actions";
import {Link} from "react-router-dom";
import {HeaderNavbar} from "@config";

export const Footer = (props) => {
    const {renderLink,renderPages} = props;
    const [state, setState] = React.useState(InitialStateBios);
    const [stateHeader, setStateHeader] = React.useState(HeaderNavbar);

    const renderFooterFirst = (num)=>{
       return HeaderNavbar.map((item, key)=> {
            if (item.index <= num && item.index !==0){
               return <li key={key}><Link to={item.path}>{item.name}</Link></li>
            }
        })
    }
    const renderFooterSecond = (num)=>{
       return HeaderNavbar.map((item, key)=> {
           if (item.index > num && item.index !==0){
               return <li key={key}><Link to={item.path}>{item.name}</Link></li>
           }
        })
    }
    return (
        <footer className="frame-header">
            <div  style={{background:"#3a3a3a"}} className="row h-100 m-0 p-5">
                <div className="col-12 row align-items-center">
                   <div className="col-md-3 text-center">
                       <Link to='/'>
                           <img
                               src={process.env.PUBLIC_URL + `./images/${state.logoDark}`}
                               style={{width:"100px", marginLeft:"20px"}}
                               alt=" logo"
                           />
                       </Link>
                   </div>
                    <div className="col-md-3 d-none d-md-block">
                        <ul>
                            {renderFooterFirst(4)}
                        </ul>
                    </div>
                    <div className="col-md-3 d-none d-md-block">
                        <ul>
                            {renderFooterSecond(4)}
                        </ul>
                    </div>
                    <div className="col-md-3 text-md-left text-center">
                        <ul className='store-apps'>
                            <li className='mb-3'>
                                <a href='https://apps.apple.com/az/app/starex-kargo/id1459518540' target="_blank">
                                    <img className='img-fluid' src={process.env.PUBLIC_URL + "./images/appleStore.png"} alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href='https://play.google.com/store/apps/details?id=pro.appify.starex&hl=en' target="_blank">
                                    <img className='img-fluid' src={process.env.PUBLIC_URL + "./images/playMarket.png"} alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='row px-5 py-3 footer-bottom'>
                <div className='col-md-6 text-md-start text-center mb-3'>© 2020 Starex MMC | Bütün Hüquqlar Qorunur</div>
                <div className='col-md-6 text-md-end text-center'>
                    <img className={'img-fluid'} src={process.env.PUBLIC_URL + "./images/payments.png"} alt=""/>
                </div>
            </div>
        </footer>
    );
};
