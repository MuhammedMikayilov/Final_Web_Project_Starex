import React, { Component, useState } from "react";
import { DomesticCity } from "./actions/domestic";
import { DomesticBranches } from "./actions/domestic";
import Districts from "./Districts";

function CityBranches() {
  const [state, setState] = React.useState(DomesticCity);
  const [stateB, setStateB] = React.useState(DomesticBranches);
  //const [isLiquid, setWater] = useState(false);
  // const branchRef = React.useRef();
  const [selectCityId, setCityId] = useState(DomesticCity.data[0].id);
  const [selectBranchesId, setBranchesId] = useState();
  //console.log(selectBranchesId);
  //console.log("Test", selectId);

  const forCity = () => {
    return state.data.map((item, key) => {
      return (
        <option value={item.id} key={key}>
          {item.city}
        </option>
      );
    });
  };
  const forBranches = () => {
    return stateB.data.map((item, key) => {
      if (Number(selectCityId) == item.cityId) {
        return (
          <option value={item.id} key={key}>
            {item.branche}
            {/* {console.log("S", item)} */}
          </option>
        );
      }
    });
  };
  return (
    <div className="row">
      <div className="col">
        <select
          className="form-control"
          id="selectCity"
          style={{
            backgroundColor: "white",
            boxShadow: "0 2px 4px rgba(0,0,0,.1)",
          }}
          onChange={(e) => {
            setCityId(e.target.value);
            setBranchesId("");
          }}
        >
          {forCity()}
        </select>
      </div>
      <div className="col">
        <select
          className="form-control"
          id="selectBranch"
          style={{
            backgroundColor: "white",
            boxShadow: "0 2px 4px rgba(0,0,0,.1)",
          }}
          onChange={(e) => {
            setBranchesId(e.target.value);
          }}
        >
          <option>Filial seçin</option>
          {forBranches()}
        </select>
      </div>
      <Districts
        selectCityId={selectCityId}
        setCityId={setCityId}
        selectBranchesId={selectBranchesId}
        setBranchesId={setBranchesId}
      />
    </div>
  );
}
export default CityBranches;
