import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Continent = {
  __typename?: 'Continent';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String'];
  continent?: Maybe<Continent>;
  emoji: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addContinent: Continent;
  addCountry: Country;
};


export type MutationAddContinentArgs = {
  data: NewContinentInput;
};


export type MutationAddCountryArgs = {
  data: NewCountryInput;
};

export type NewContinentInput = {
  name: Scalars['String'];
};

export type NewCountryInput = {
  code: Scalars['String'];
  continent?: InputMaybe<ObjectId>;
  emoji: Scalars['String'];
  name: Scalars['String'];
};

export type ObjectId = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  continents: Array<Continent>;
  countries: Array<Country>;
  country: Country;
};


export type QueryCountryArgs = {
  code: Scalars['String'];
};

export type AddContinentMutationVariables = Exact<{
  data: NewContinentInput;
}>;


export type AddContinentMutation = { __typename?: 'Mutation', addContinent: { __typename?: 'Continent', id: number, name: string } };

export type AddCountryMutationVariables = Exact<{
  data: NewCountryInput;
}>;


export type AddCountryMutation = { __typename?: 'Mutation', addCountry: { __typename?: 'Country', code: string, emoji: string, id: number, name: string, continent?: { __typename?: 'Continent', id: number, name: string } | null } };

export type GetAllContinentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllContinentsQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', id: number, name: string }> };

export type GetAllCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', code: string, emoji: string, id: number, name: string, continent?: { __typename?: 'Continent', id: number, name: string } | null }> };

export type GetCountryQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type GetCountryQuery = { __typename?: 'Query', country: { __typename?: 'Country', code: string, emoji: string, id: number, name: string, continent?: { __typename?: 'Continent', id: number, name: string } | null } };


export const AddContinentDocument = gql`
    mutation AddContinent($data: NewContinentInput!) {
  addContinent(data: $data) {
    id
    name
  }
}
    `;
export type AddContinentMutationFn = Apollo.MutationFunction<AddContinentMutation, AddContinentMutationVariables>;

/**
 * __useAddContinentMutation__
 *
 * To run a mutation, you first call `useAddContinentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddContinentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addContinentMutation, { data, loading, error }] = useAddContinentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddContinentMutation(baseOptions?: Apollo.MutationHookOptions<AddContinentMutation, AddContinentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddContinentMutation, AddContinentMutationVariables>(AddContinentDocument, options);
      }
export type AddContinentMutationHookResult = ReturnType<typeof useAddContinentMutation>;
export type AddContinentMutationResult = Apollo.MutationResult<AddContinentMutation>;
export type AddContinentMutationOptions = Apollo.BaseMutationOptions<AddContinentMutation, AddContinentMutationVariables>;
export const AddCountryDocument = gql`
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
export type AddCountryMutationFn = Apollo.MutationFunction<AddCountryMutation, AddCountryMutationVariables>;

/**
 * __useAddCountryMutation__
 *
 * To run a mutation, you first call `useAddCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCountryMutation, { data, loading, error }] = useAddCountryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddCountryMutation(baseOptions?: Apollo.MutationHookOptions<AddCountryMutation, AddCountryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCountryMutation, AddCountryMutationVariables>(AddCountryDocument, options);
      }
export type AddCountryMutationHookResult = ReturnType<typeof useAddCountryMutation>;
export type AddCountryMutationResult = Apollo.MutationResult<AddCountryMutation>;
export type AddCountryMutationOptions = Apollo.BaseMutationOptions<AddCountryMutation, AddCountryMutationVariables>;
export const GetAllContinentsDocument = gql`
    query GetAllContinents {
  continents {
    id
    name
  }
}
    `;

/**
 * __useGetAllContinentsQuery__
 *
 * To run a query within a React component, call `useGetAllContinentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllContinentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllContinentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllContinentsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllContinentsQuery, GetAllContinentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllContinentsQuery, GetAllContinentsQueryVariables>(GetAllContinentsDocument, options);
      }
export function useGetAllContinentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllContinentsQuery, GetAllContinentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllContinentsQuery, GetAllContinentsQueryVariables>(GetAllContinentsDocument, options);
        }
export type GetAllContinentsQueryHookResult = ReturnType<typeof useGetAllContinentsQuery>;
export type GetAllContinentsLazyQueryHookResult = ReturnType<typeof useGetAllContinentsLazyQuery>;
export type GetAllContinentsQueryResult = Apollo.QueryResult<GetAllContinentsQuery, GetAllContinentsQueryVariables>;
export const GetAllCountriesDocument = gql`
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

/**
 * __useGetAllCountriesQuery__
 *
 * To run a query within a React component, call `useGetAllCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCountriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCountriesQuery, GetAllCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCountriesQuery, GetAllCountriesQueryVariables>(GetAllCountriesDocument, options);
      }
export function useGetAllCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCountriesQuery, GetAllCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCountriesQuery, GetAllCountriesQueryVariables>(GetAllCountriesDocument, options);
        }
export type GetAllCountriesQueryHookResult = ReturnType<typeof useGetAllCountriesQuery>;
export type GetAllCountriesLazyQueryHookResult = ReturnType<typeof useGetAllCountriesLazyQuery>;
export type GetAllCountriesQueryResult = Apollo.QueryResult<GetAllCountriesQuery, GetAllCountriesQueryVariables>;
export const GetCountryDocument = gql`
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

/**
 * __useGetCountryQuery__
 *
 * To run a query within a React component, call `useGetCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountryQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetCountryQuery(baseOptions: Apollo.QueryHookOptions<GetCountryQuery, GetCountryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountryQuery, GetCountryQueryVariables>(GetCountryDocument, options);
      }
export function useGetCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountryQuery, GetCountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountryQuery, GetCountryQueryVariables>(GetCountryDocument, options);
        }
export type GetCountryQueryHookResult = ReturnType<typeof useGetCountryQuery>;
export type GetCountryLazyQueryHookResult = ReturnType<typeof useGetCountryLazyQuery>;
export type GetCountryQueryResult = Apollo.QueryResult<GetCountryQuery, GetCountryQueryVariables>;