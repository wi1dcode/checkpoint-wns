import { GetServerSideProps } from "next";
import React from "react";
import { Country } from "../../types";
import client from "../../graphql/client";
import { GET_COUNTRIES } from "../../graphql/queries";

const CountryDetail: React.FC<{ country: Country }> = ({ country }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{country.name}</h1>
      <p className="text-2xl">{country.emoji}</p>
      <p className="text-xl">Code: {country.code}</p>
      {country.continent && (
        <p className="text-xl">Continent: {country.continent}</p>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { code } = context.params!;
  const { data } = await client.query({
    query: GET_COUNTRIES,
  });

  const country = data.countries.find(
    (country: Country) => country.code === code
  );

  return {
    props: {
      country,
    },
  };
};

export default CountryDetail;
