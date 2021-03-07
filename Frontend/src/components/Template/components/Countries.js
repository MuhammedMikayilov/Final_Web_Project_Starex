import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CountiesList, getCountries } from "@layouts/Pages/Tariffs/actions/countries";

const CountriesComp = (props) => {
  const [countryApi, setCountryApi] = React.useState()
  const { hasLiquid, hasWater, selectId, setId } = props;
  // const [state, setState] = React.useState(CountiesList);


  React.useEffect(()=>{
    getCountries(countryApi, setCountryApi)
  }, []) 

  const forCountries = () => {
    return countryApi?.data?.map((item, key) => {

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
            className="countryLink"
            to="#"
          >
            <img
              src={process.env.PUBLIC_URL + `./images/${item.image}`}
              alt="flat"
              className="flat test"
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
export default CountriesComp;
