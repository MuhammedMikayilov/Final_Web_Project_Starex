import React, {Component, useState} from 'react';
import {ListWithWater} from "@layouts/Tariffs/actions";

const Test = (props) => {

    const [state, setState] = React.useState(ListWithWater)
    const [isWater, setWater] = useState(false)
    const forWater = () => {
        return state.data.map((item, key)=>{
            if (item.isWater){
                return(
                    <li>
                        {item.icon}
                    </li>
                )
            }
        })
    }
    return (
        <div>
            <button onClick={()=>setWater(!isWater)}>Change Water</button>
           <ul>
               {isWater ? forWater() : <span>Test</span>}
           </ul>
        </div>
    );
}

export default Test;
