import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      code
      emoji
      continent {
        name
      }
    }
  }
`;

export const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      name
      id
    }
  }
`;
<<<<<<< HEAD
=======

export const GET_COUNTRY_BY_CODE = gql`
  query GetCountryByCode($code: String!) {
    country(code: $code) {
      name
      code
      emoji
      continent {
        name
      }
    }
  }
`;
>>>>>>> cc3a99f (done)
