import React, { Component, useState } from "react";
import { CountiesList } from "@layouts/Tariffs/actions/countries";
import { Link } from "react-router-dom";

const Countries = (props) => {
  const { hasLiquid, hasWater, selectId, setId } = props;
  const [state, setState] = React.useState(CountiesList);

  const forCountries = () => {
    return state.data.map((item, key) => {
      return (
        <li
          className={`list-unstyled ${
            selectId === item.id ? "activeCountry" : ""
          }`}
          key={key}
        >
          <Link
            onClick={() => {
              setId(item.id);
              if (item.hasLiquid) {
                hasWater(true);
              } else {
                hasWater(false);
              }
            }}
            to="#"
            style={{ color: "#000", fontSize: "16px" }}
          >
            <img
              src={process.env.PUBLIC_URL + item.image}
              alt="flat"
              className="flat"
            />
            {item.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="country">
      <ul className="d-flex justify-content-between m-0 p-0">
        {forCountries()}
      </ul>
    </div>
  );
};
export default Countries;
