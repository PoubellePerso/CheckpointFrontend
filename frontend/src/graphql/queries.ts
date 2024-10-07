import { gql } from "@apollo/client";

export const GET_ALL_CONTINENTS = gql`
query GetAllContinents {
        continents {
            id
            name
    }
}
`;

export const GET_ALL_COUNTRIES = gql`
query GetAllCountries {
  countries {
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

export const GET_COUNRTY = gql`
query GetCountry($code: String!) {
  country(code: $code) {
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