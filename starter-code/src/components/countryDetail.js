import React from "react";
import countries from "../countries.json";
import {Link} from "react-router-dom";


export const countryDetail = props => {
  const countryAbbreviation = props.match.params.toto;
  // const countryName = props.match.params.toto;
  var res = countries.filter(elt => {
    console.log("elt.cca3: " + elt.cca3)
    console.log("countryAbbreviation: " + countryAbbreviation)
    return elt.cca3 === countryAbbreviation;
    // return elt.name.common === countryName;
  });
  var result = res[0];
  // Here, display something linked to toto
  console.log("res: " + res);
  console.log("res[0]: " + res[0]);
  // console.log("res[0].name.common: " + res[0].name.common);
  return (
    <div>
      <h1>{result.name.common}</h1>
      <table class="table">
        <thead />
        <tbody>
          <tr>
            <td styles={{ width: "30%" }}>Capital</td>
            <td>{result.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {result.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {result.borders.map(elt => {
                  return (
                    <li key={elt}>
                      <Link
                        to={`${elt}`}
                      >
                        {elt}
                      </Link>
                    </li>
                  );
                })}
             
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default countryDetail;
