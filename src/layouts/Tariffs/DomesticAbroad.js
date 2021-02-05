import React, { Component, useState } from "react";

const DomesticAbroad = (props) => {
  const [state, setState] = React.useState();
  const { isAbroad, setAbroad } = props;
  
  return (
    <div className="row d-flex justify-content-center mb-5 mt-4 text-center">
      <div
        className={`col-md-2 countryTariffs ${isAbroad ? "active" : ""}`}
        style={{
          backgroundColor: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0,0,0,.1)",
        }}
        onClick={() => {
          setAbroad(true);
        }}
      >
        <h4 className="m-0" style={{ color: "#a9a9a9" }}>
          Ölkə xaricindən Daşınma tarifləri
        </h4>
      </div>
      <div
        className={`col-md-2 countryTariffs ${isAbroad ? "" : "active"}`}
        style={{
          backgroundColor: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0,0,0,.1)",
        }}
        onClick={() => {
          setAbroad(false);
        }}
      >
        <h4 className="m-0" style={{ color: "#a9a9a9" }}>
          Ölkədaxili Kuryer tarifləri
        </h4>
      </div>
    </div>
  );
};

export default DomesticAbroad;
