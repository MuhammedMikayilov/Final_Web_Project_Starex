import React, { Component, useState } from "react";
import { ServiceList } from "./actions/services";

const Services = () => {
  const [state, setState] = React.useState(ServiceList);

  const forService = (e) => {
    return state.data.map((item, key) => {
      return (
        <div className="serviceList" key={key}>
          <div className="title pt-5">
            <h3 className="m-0">{item.title}</h3>
          </div>
          <div className="subtitle py-5">
            <p className="m-0"> {item.subtitle}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <section id="servicesSection">
      <div className="container">
        <div className="col-md-8">{forService()}</div>
      </div>
    </section>
  );
};

export default Services;
