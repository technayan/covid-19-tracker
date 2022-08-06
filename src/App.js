import './App.css';
import { FormControl, Select, MenuItem } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useEffect, useState } from 'react';
import InfoBox from './components/InfoBox/InfoBox';
import Map from './Map';
import Table from './Table';
import { sortData } from './util';
import LineGraph from './LineGraph';


function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState([]);
  const [tableData, setTableData] = useState([]);

  // Last 15 days Cases data
  const  [casesData, setCasesData] = useState({});


  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then(res => res.json())
    .then(data => {
      setCountryInfo(data);
    })
  }, [])

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

        const sortedData = sortData(data);
        setTableData(sortedData);
        setCountries(countries);
      });
    };

    getCountriesData();
  }, []);

  // Last 15 Days Cases Line Chart
  useEffect(() => {
        const fetchData = async () => {
            await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=15')
                    .then(res => res.json())
                    .then(data => {
                        setCasesData(data);
                    })
        }
        fetchData();
    }, []);

    console.log(casesData.cases);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

    const url = countryCode ==='worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
    .then(res => res.json())
    .then(data => {
      setCountryInfo({data});
    })
  }


  return (
    <div className="App">
      <div className="app__left">
        <div className="app__header">
          <h1>Covid-19 Tracker</h1>
          <FormControl className='app__dropdown'>
            <Select variant='outlined' onChange={onCountryChange} value={country} label="Worldwide">
              <MenuItem value='worldwide'>Worldwide</MenuItem>
              {
                countries.map((country, i) => (
                  <MenuItem key={i} value={country.name}>{country.name}</MenuItem>
                ) )
              }
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
        </div>

        
           
        
        

        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3>Worldwide new Cases</h3>
          {
            casesData?.cases && <LineGraph casesData={casesData}/> 
          }
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
