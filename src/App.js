import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {RadialGauge} from 'react-canvas-gauges'
import { useInputChange } from './useInputChange'

export const App = () => {

  
  const [input, handleInputChange] = useInputChange()

  return (
    <div className="container">
     <div>
     <h3>Demo for honeywell</h3>
        <label>Enter Temperature:</label>
        <input type="text" name="temp" onChange={handleInputChange} />
      </div>
    <div className="App">
      <RadialGauge
   units='°C'
   title='Temperature'
   value={input.temp*1}
   minValue={0}
   maxValue={50}
   majorTicks={['0', '5', '15', '20', '25', '30', '35', '40', '45', '50']}
   minorTicks={2}
></RadialGauge>
    </div></div>
  );
}
export default App


