import React from "react";
import { Country } from "../types";

const CountryList: React.FC<{ countries: Country[] }> = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {countries.map((country, index) => (
        <div key={index} className="border p-4 rounded-lg">
          <h2 className="text-lg font-bold">{country.name}</h2>
          <p className="text-2xl">{country.emoji}</p>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
