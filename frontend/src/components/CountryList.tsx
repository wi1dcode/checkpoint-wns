import React from "react";
import { Country } from "../types";
<<<<<<< HEAD

const CountryList: React.FC<{ countries: Country[] }> = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {countries.map((country, index) => (
        <div key={index} className="border p-4 rounded-lg">
          <h2 className="text-lg font-bold">{country.name}</h2>
          <p className="text-2xl">{country.emoji}</p>
        </div>
=======
import Link from "next/link";

const CountryList: React.FC<{ countries: Country[] }> = ({ countries }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 text-center">
      {countries.map((country, index) => (
        <Link
          href={`/country/${country.code}`}
          key={index}
          className="border p-4 rounded-lg flex flex-col items-center w-[20%] max-md:w-[40%] cursor-pointer hover:shadow-lg transition-shadow"
        >
          <p className="text-5xl">{country.emoji}</p>
          <h2 className="text-2xl font-bold">{country.name}</h2>
        </Link>
>>>>>>> cc3a99f (done)
      ))}
    </div>
  );
};

export default CountryList;
