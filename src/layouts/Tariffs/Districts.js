import React, { Component, useState } from "react";
import { DomesticDistricts } from "./actions/domestic";

const Districts = (props) => {
  const [state, setState] = React.useState(DomesticDistricts);
  const { selectBranchesId, setBranchesId, selectCityId, setCityId } = props;
  //const [isLiquid, setWater] = useState(false);
  const forDistricts = () => {
    return state.data.map((item, key) => {
      if (item.branchesId == Number(selectBranchesId)) {
        return (
          <div className="tariffList d-flex justify-content-between" key={key}>
            <div className="weightRange">
              <p className="m-0">{item.districts}</p>
            </div>
            <div className="price">
              <p className="m-0">$ {item.price}</p>
            </div>
          </div>
        );
      }
    });
  };
  return <div className="tariffs">{forDistricts()}</div>;
};

export default Districts;
