import React from 'react';
import {render} from '@testing-library-react';
// import ReactDOM from 'react-dom';
import App from './App';

test('App renders without crashing', () => {
  render(<App />);
});


test('Test that ball count and strike count are rendered on Display', () => {
  const {getByTestId} = render(<App />);

  getByTestId(/playersName/i);
  getByTestId(/playersCountry/i);
  getByTestId(/playersId/i);    

})