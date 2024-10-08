import { gql } from "@apollo/client";

export const ADD_CONTINENT = gql`
mutation AddContinent($data: NewContinentInput!) {
  addContinent(data: $data) {
    id
    name
  }
}
`;

export const ADD_COUNTRY = gql`
mutation AddCountry($data: NewCountryInput!) {
  addCountry(data: $data) {
    code
    continent {
      id
      name
    }
    emoji
    id
    name
  }
}

`;