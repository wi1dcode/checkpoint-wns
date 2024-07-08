import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import client from "../../graphql/client";
import { Country } from "../../types";
import { GET_COUNTRIES, GET_COUNTRY_BY_CODE } from "@/graphql/queries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CountryDetail: React.FC = () => {
  const router = useRouter();
  const { code } = router.query;
  const [country, setCountry] = useState<Country | null>(null);
  const [load, setLoading] = useState(true);
  const { loading, error, data, refetch } = useQuery(GET_COUNTRIES);

  useEffect(() => {
    if (code) {
      client
        .query({
          query: GET_COUNTRY_BY_CODE,
          variables: { code },
        })
        .then((result) => {
          setCountry(result.data.country);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching country details:", error);
          setLoading(false);
        });
    }
  }, [code]);

  if (load) {
    return <div className="text-center mt-20 text-2xl">Loading...</div>;
  }

  if (!country) {
    return <div className="text-center mt-20 text-2xl">Country not found</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-4">{country.name}</h1>
        <p className="text-7xl mb-4">{country.emoji}</p>
        <p className="text-2xl mb-2">Code: {country.code}</p>
        {country.continent && (
          <p className="text-2xl mb-2">Continent: {country.continent.name}</p>
        )}
      </div>
      <Footer refetchCountries={refetch} />
    </>
  );
};

export default CountryDetail;
