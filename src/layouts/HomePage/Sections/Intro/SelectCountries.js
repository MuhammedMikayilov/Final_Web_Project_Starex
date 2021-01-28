import React, {Component, useState} from 'react';
import {CountriesList, PriceForWeight} from "@layouts/HomePage/actions";
import {Lang} from "@plugins";

const Selections = (props) => {
    const [selections, setSelection] = useState(CountriesList)
    const [inputVal, updateInputVal] = useState(0);
    const inputRef = React.useRef();
    const [priceState, updatePriceState] = useState(PriceForWeight)
    const [price, updatePrice] = useState(0.00);



    return (
       <>
           <div className="col-md-4">
               <div className="wrap">
                   <select>
                       {selections.data.map((item, key)=>(
                           <option key={key}> {item.country}</option>
                       ))}
                   </select>
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
                       ${inputVal!==""?inputVal:0}

                   </div>
               </div>
           </div>
       </>
    );
}

export default Selections;
