import './App.css';
import { FormControl, Select, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';

function App() {
  

  return (
    <div className="App">
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className='app__dropdown'>
          <Select variant='outlined' value="abc" label="WorldWide">
            
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
