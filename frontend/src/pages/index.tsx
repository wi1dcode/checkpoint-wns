import React from "react";
import { useQuery } from "@apollo/client";
import CountryList from "../components/CountryList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GET_COUNTRIES } from "../graphql/queries";

const Home: React.FC = () => {
  const { loading, error, data, refetch } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <CountryList countries={data.countries} />
      </main>
      <Footer refetchCountries={refetch} />
    </div>
  );
};

export default Home;
