import React, { Component, useState } from "react";

// Domestic - Yurtiçi
// Abroad - Yurt dışı
const DomesticAbroad = (props) => {
  const [state, setState] = React.useState();
  const { isAbroad, setAbroad, buttonFirstText, buttonSecondText } = props;

  return (
    <div className="row d-flex justify-content-center mb-5 mt-4 text-center">
      <div
        className={`col-lg-2 col-md-3 col-5 countryTariffs ${
          isAbroad ? "active" : ""
        }`}
        onClick={() => {
          setAbroad(true);
        }}
      >
        <h4 className="m-0">{buttonFirstText}</h4>
      </div>
      <div
        className={`col-lg-2 col-md-3 col-5 countryTariffs ${
          isAbroad ? "" : "active"
        }`}
        onClick={() => {
          setAbroad(false);
        }}
      >
        <h4 className="m-0">{buttonSecondText}</h4>
      </div>
    </div>
  );
};

export default DomesticAbroad;
