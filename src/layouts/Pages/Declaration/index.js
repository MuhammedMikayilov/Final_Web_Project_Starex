import React, { Component, useState } from "react";
import { CountiesList } from "../Tariffs/actions/countries";

// Domestic - Yurtiçi
// Abroad - Yurt dışı
const Declaration = (props) => {
  const [state, setState] = React.useState(CountiesList);
  const [countryId, setCountryId] = useState();

  const forCountry = () => {
    return state.data.map((item, key) => {
      return (
        <div
          className="col-lg-10 countryTariffs"
          key={key}
          onClick={() => {
            setCountryId(item.id);
          }}
        >
          <img
            src={process.env.PUBLIC_URL + `./images/${item.image}`}
            alt="flat"
            className="flat test"
          />
          <h4 className="m-0">{item.name}</h4>
        </div>
      );
    });
  };

  const forForm = () => {
    return state.data.map((item, key) => {
      if (item.id === countryId) {
        return (
          <div className="col-lg-10 countryTariffs" key={key}>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label htmlFor="inputPassword4">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
              </div>
              <div class="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div class="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label htmlFor="inputCity">City</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="form-group col-md-4">
                  <label htmlFor="inputState">State</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label htmlFor="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" htmlFor="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </form>
          </div>
        );
      }
    });
  };

  return (
    <div className="row d-flex justify-content-between mb-5 mt-4 text-center">
      {forCountry()}
    </div>
  );
};

export default Declaration;
