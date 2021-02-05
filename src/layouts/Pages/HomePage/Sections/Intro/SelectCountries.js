import React, {Component, useState} from 'react';
import {Lang} from "@plugins";
import {CountiesList} from "@layouts/Pages/Tariffs/actions/countries";
import {PriceForWeight} from "@layouts/Pages/HomePage/actions";

const Selections = (props) => {
    const [selections, setSelection] = useState(CountiesList)
    const [inputVal, updateInputVal] = useState(0);
    const inputRef = React.useRef();
    const [priceState, updatePriceState] = useState(PriceForWeight)
    const [checkLiquid, updateChecklLiquid] = useState(false)
    const [liquid, updateLiquid] = useState("true");

    return (
       <>
           <div className="col-md-4">
               <div className="wrap">
                   <select onChange={(e)=>{
                       updateLiquid(e.target.value)
                   }}>
                       {selections.data.map((item, key)=>{
                           return <option key={key} value={item.hasLiquid}> {item.name}</option>
                       })}
                   </select>
               </div>
               <div style={{marginLeft:"25px"}} className={`liquid ${liquid==="false"&&'hidden'}`}>
                   <div className="">
                       <input
                           id="flexCheckDefault"
                           style={{width:"15px", height:"15px"}}
                           type="checkbox"
                           onChange={()=>{
                               updateChecklLiquid(!checkLiquid)
                           }}
                       />
                       <label style={{fontSize:"14px"}} className="form-check-label ml-3" htmlFor="flexCheckDefault">
                           Məhsulun tərkibində maye var
                       </label>
                   </div>
               </div>

           </div>
           <div className="col-md-4">
               <div className="wrap">
                   <div className='form-group inputWeight'>
                       <input
                           ref={inputRef}
                          type="number"
                          min={0}
                          defaultValue={0}
                          onChange={(e)=>{
                              updateInputVal(e.target.value)
                          }}
                         placeholder="Çəkini qeyd edin"
                       />

                       <div className="weight">
                           <select>
                               <option>KQ</option>
                               <option>QR</option>
                           </select>
                       </div>
                   </div>
               </div>
           </div>
           <div className="col-md-4">
               <div className="wrap priceDelivery">
                   <div className='message'>{Lang.get("Çatdırılma qiyməti")}</div>
                   <div className="value">
                       ${inputVal!==""? checkLiquid?inputVal*2 :inputVal:0}
                   </div>
               </div>
           </div>
       </>
    );
}

export default Selections;
