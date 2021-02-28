import React, { Component, useState } from "react";
import DomesticAbroad from "@components/Template/components/DomesticAbroad";
import CityBranches from "./CityBranches";
import { ContainsLiquid } from "@layouts/Pages/Tariffs/actions";
import { CountiesList } from "@layouts/Pages/Tariffs/actions/countries";
import CountriesComp from "@components/Template/components/Countries";
import { DomesticAbroadList } from "./actions/index";

const Tariffs = () => {
  const [state, setState] = React.useState(ContainsLiquid);
  const [isLiquid, setWater] = useState(false);
  const [hasLiquid, hasWater] = useState(true);
  const [isAbroad, setAbroad] = useState(true);
  // # # # # # # button'daki text'leri deyishdirmek ucun
  const [buttonFirstText, setButtonFirstText] = useState(
    DomesticAbroadList.data[0].title
  );
  const [buttonSecondText, setButtonSecondText] = useState(
    DomesticAbroadList.data[1].title
  ); // # # # # #

  const [selectId, setId] = useState(CountiesList.data[0].id);
  const forWater = () => {
    return state.data.map((item, key) => {
      if (item.isLiquid && selectId === item.countryId) {
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
      if (!item.isLiquid && selectId === item.countryId) {
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
        <DomesticAbroad
          isAbroad={isAbroad}
          setAbroad={setAbroad}
          buttonFirstText={buttonFirstText}
          buttonSecondText={buttonSecondText}
        />
        {isAbroad ? (
          <div className="row justify-content-center">
            <div className="col-md-8">
              <CountriesComp
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
                {isLiquid && hasLiquid ? forWater() : forOtherCountry()}
              </div>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-md-8">
              <CityBranches />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Tariffs;
