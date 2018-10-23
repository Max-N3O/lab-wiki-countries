import React from "react";
import countries from "../countries.json";
import CountryDetail from "./countryDetail";
import {Link} from "react-router-dom";

console.log(countries);

export const list = () => {
  return (
    <div class="list-group">
      <h2>Countries:</h2>
        {countries.map((eachCountry) => {
          return (
            <div key={eachCountry.cca3}>
              <Link to={`${eachCountry.cca3}`} class="list-group-item list-group-item-action">{eachCountry.name.common}</Link>
            {/* <div key={eachCountry.name.common}>
              <Link to={`${eachCountry.name.common}`} class="list-group-item list-group-item-action">{eachCountry.name.common}</Link> */}
            </div>
          );
        })}
    </div>
  );
};

export default list
