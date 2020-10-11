import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { countriesName } from '../../api';
const CountryPicker = ({ handleCountry }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await countriesName());
    };
    fetchCountries();
  }, [setFetchedCountries]);
  // console.log(fetchedCountries);

  return (
    <FormControl variant='filled' className={styles.formControl}>
      <NativeSelect
        className={styles.select}
        defaultValue=''
        onChange={(e) => handleCountry(e.target.value)}
      >
        <option value='' className={styles.option}>
          Global
        </option>
        {fetchedCountries.map((country, i) => (
          <option className={styles.option} key={i} value={country.alpha2}>
            {country.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
