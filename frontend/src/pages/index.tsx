import styles from '@/styles/pages/Home.module.scss';
import { AddCountries } from '@/components/AddCountries'; 
import { CountriesList } from '@/components/CountriesList';
import { useEffect, useState } from 'react';
import { useGetAllCountriesQuery, Country } from '@/generated/graphql-types';

export default function Home() {
  const { data: countriesData, error: countriesError, loading: countriesLoading, refetch: countriesRefetch } = useGetAllCountriesQuery();

  return (
    <div className={styles.container}>
      <AddCountries refetch={countriesRefetch}/>
      {
        countriesLoading && <p>Loading...</p>
      }
      {
        countriesError && <p>Error: {countriesError.message}</p>
      }
      {countriesData && (<CountriesList Countries={countriesData.countries as Country[]} />)}
    </div>
  );
}