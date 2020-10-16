import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {RadialGauge} from 'react-canvas-gauges'

export const App = () => {

  const [input, setInput] = useState({})

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })
  return (
    <div className="container">
     <div>
        <label>Username:</label>
        <input type="text" name="username" onChange={handleInputChange} />
      </div>
    <div className="App">
      <RadialGauge
   units='°C'
   title='Temperature'
   value={input.username}
   minValue={0}
   maxValue={50}
   majorTicks={['0', '5', '15', '20', '25', '30', '35', '40', '45', '50']}
   minorTicks={2}
></RadialGauge>
    </div></div>
  );
}

export default App;
