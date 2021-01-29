import * as React from "react";
import { AppContext, SidebarContext } from "@contexts";
import { Lang } from "@plugins";
import {InitialStateBios, InitialStateHeader} from "@components/Template/actions";
import {Link} from "react-router-dom";
import {HeaderNavbar} from "@config";

export const Footer = (props) => {
    const {renderLink,renderPages} = props;
    const [state, setState] = React.useState(InitialStateBios);
    const [stateHeader, setStateHeader] = React.useState(HeaderNavbar);

    const renderFooterFirst = (num)=>{
       return HeaderNavbar.map((item, key)=> {
           console.log("m",num)
            if (item.index <= num && item.index !==0){
               return <li key={key}><Link to={item.path}>{item.name}</Link></li>
            }
        })
    }
    const renderFooterSecond = (num)=>{
       return HeaderNavbar.map((item, key)=> {
           console.log("m",num)
           if (item.index > num && item.index !==0){
               return <li key={key}><Link to={item.path}>{item.name}</Link></li>
           }
        })
    }
    return (
        <footer className="frame-header">
            <div  style={{background:"#3a3a3a"}} className="row h-100 m-0 p-5">
                <div className="col-12 row align-items-center">
                   <div className="col-md-3">
                       <Link to='/'>
                           <img
                               src={process.env.PUBLIC_URL + `./images/${state.logoDark}`}
                               style={{width:"100px", marginLeft:"20px"}}
                               alt=" logo"
                           />
                       </Link>
                   </div>
                    <div className="col-md-3">
                        <ul>
                            {renderFooterFirst(4)}
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            {renderFooterSecond(4)}
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
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
            <div className='row px-5 py-3'>
                <div className='col-md-6'>© 2020 Starex MMC | Bütün Hüquqlar Qorunur</div>
                <div className='col-md-6 text-end'>
                    <img className={'img-fluid'} src={process.env.PUBLIC_URL + "./images/payments.png"} alt=""/>
                </div>
            </div>
        </footer>
    );
};
