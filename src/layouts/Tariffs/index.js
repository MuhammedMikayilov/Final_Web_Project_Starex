import React, { Component, useState } from "react";
import { ContainsLiquid } from "@layouts/Tariffs/actions";
import Countries from "./Countries";

const Tariffs = () => {
  const [state, setState] = React.useState(ContainsLiquid);
  const [isLiquid, setWater] = useState(false);
  const [hasLiquid, hasWater] = useState(true);
  const [selectId, setId] = useState();
  console.log(selectId);
  const forWater = () => {
    return state.data.map((item, key) => {
      if (item.isLiquid) {
        return (
          <div className="tariffList d-flex justify-content-between" key={key}>
            <div className="weightRange">
              <p className="m-0">{item.weight}</p>
            </div>
            <div className="price">
              <p className="m-0">$ {item.price}</p>
            </div>
          </div>
        );
      }
    });
  };
  const forProduct = () => {
    return state.data.map((item, key) => {
      if (!item.isLiquid) {
        return (
          <div className="tariffList d-flex justify-content-between" key={key}>
            <div className="weightRange">
              <p className="m-0">{item.weight}</p>
            </div>
            <div className="price">
              <p className="m-0">$ {item.price}</p>
            </div>
          </div>
        );
      }
    });
  };
  const forOtherCountry = () => {
    return state.data.map((item, key) => {
      if (!item.isLiquid && selectId == item.countryId) {
        return (
          <div className="tariffList d-flex justify-content-between" key={key}>
            <div className="weightRange m-0">
              <p className="m-0">{item.weight}</p>
            </div>
            <div className="price">
              <p className="m-0">$ {item.price}</p>
            </div>
          </div>
        );
      }
    });
  };
  return (
    <section id="tariffsSection">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Countries
              hasLiquid={hasLiquid}
              hasWater={hasWater}
              selectId={selectId}
              setId={setId}
            />
            {hasLiquid && (
              <div className="form-check">
                <input
                  onClick={() => setWater(!isLiquid)}
                  type="checkbox"
                  className="form-check-input"
                  id="liquid"
                />

                <label className="form-check-label" htmlFor="liquid">
                  Change Liquid
                </label>
              </div>
            )}
            <div className="tariffs">
              {hasLiquid
                ? isLiquid
                  ? forWater()
                  : forProduct()
                : forOtherCountry()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Tariffs;
