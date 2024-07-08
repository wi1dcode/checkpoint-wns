import { gql } from '@apollo/client';

export const ADD_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      name
      code
      emoji
      continent {
        name
      }
    }
  }
`;
