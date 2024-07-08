import React from "react";
import { Country } from "../types";
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
      ))}
    </div>
  );
};

export default CountryList;
