import React from 'react';
import ReactDOM from 'react-dom';
import { default as DatePicker } from './DatePicker';

ReactDOM.render(
  <div>
    <div style={{marginBottom: '4em'}}>
      <h1>This example has a minDate and maxDate.</h1>
      <p>openToDate is '20170424'.</p>
      <DatePicker bounded />
    </div>
    <div>
      <h1>This example doesn't.</h1>
      <p>openToDate is '20170424'.</p>
      <DatePicker />
    </div>
  </div>,
  document.getElementById('app')
);
