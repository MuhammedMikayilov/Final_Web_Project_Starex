import React, { Component, useState } from "react";
import { CountiesList } from "@layouts/Pages/Tariffs/actions/countries";
import CountriesComp from "@components/Template/components/Countries";
import DomesticAbroad from "@components/Template/components/DomesticAbroad";
import { DomesticAbroadList } from "../Tariffs/actions/index";
import { DomesticBranches } from "../Tariffs/actions/domestic";
import { BranchsContactList } from "../Contact/actions/index";
import { CountriesContactList } from "../Contact/actions/index";

const Contact = () => {
  const [state, setState] = React.useState(DomesticBranches);
  const [stateBranchs, setStateBranchs] = React.useState(BranchsContactList);
  const [stateCountry, setStateCountry] = React.useState(CountriesContactList);
  const [hasLiquid, hasWater] = useState(true);
  const [isAbroad, setAbroad] = useState(true);
  const [selectId, setId] = useState(CountiesList.data[0].id);
  // warehouses - anbarlar
  // branches - filiallar
  // # # # # # # button'daki text'leri deyishdirmek ucun
  const [buttonFirstText, setButtonFirstText] = useState(
    DomesticAbroadList.data[2].title
  );
  const [buttonSecondText, setButtonSecondText] = useState(
    DomesticAbroadList.data[3].title
  ); // # # # # #

  const forBranches = () => {
    return state.data.map((item, key) => {
      return (
        <li
          className={`list-unstyled countryLink test ${
            selectId === item.id ? "activeCountry" : ""
          }`}
          key={key}
          onClick={() => {
            setId(item.id);
          }}
        >
          {item.branche}
        </li>
      );
    });
  };
  const forBranchsContact = () => {
    return stateBranchs.data.map((item, key) => {
      if (selectId === item.id) {
        return (
          <div className="country" style={{ padding: "20px 30px" }} key={key}>
            <div className="price d-flex pb-3">
              <i className="fas fa-map-marker-alt pr-4"></i>
              <p className="m-0">{item.adress}</p>
            </div>
            <div className="weightRange d-flex pb-3">
              <i className="far fa-clock pr-4"></i>
              <p className="m-0">{item.phone}</p>
            </div>
            <div className="price d-flex pb-3">
              <i className="fas fa-phone-alt pr-4"></i>
              <p className="m-0">{item.time}</p>
            </div>
          </div>
        );
      }
    });
  };
  const forCountyiesContact = () => {
    return stateCountry.data.map((item, key) => {
      if (selectId === item.id) {
        return (
          <div className="country" style={{ padding: "20px 30px" }} key={key}>
            <div className="price d-flex pb-3">
              <i className="fas fa-map-marker-alt pr-4"></i>
              <p className="m-0">{item.adress}</p>
            </div>
            <div className="price d-flex pb-3">
              <i className="fas fa-phone-alt pr-4"></i>
              <p className="m-0">{item.time}</p>
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
            <div className="col-md-10">
              <CountriesComp
                hasLiquid={hasLiquid}
                hasWater={hasWater}
                selectId={selectId}
                setId={setId}
              />

              <div className="tariffs">{forCountyiesContact()}</div>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="country">
                <ul className="branchsContact d-flex justify-content-between m-0 p-0">
                  {forBranches()}
                </ul>
              </div>
            </div>
            <div className="col-md-10">{forBranchsContact()}</div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Contact;
