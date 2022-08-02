import './App.css';
import { FormControl, Select, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then(res => res.json())
      .then(data => {
        const countries = data.map(country => (
          {
            name: country.country,
          }
        ));
      
        setCountries(countries);
      });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  }

  return (
    <div className="App">
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className='app__dropdown'>
          <Select variant='outlined' onChange={onCountryChange} value={country} label="WorldWide">
            <MenuItem value='worldwide'>Worldwide</MenuItem>
            {
              countries.map((country, i) => (
                <MenuItem key={i} value={country.name}>{country.name}</MenuItem>
              ) )
            }
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
