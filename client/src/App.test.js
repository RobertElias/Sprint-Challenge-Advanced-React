// import React from 'react';
import * as rtl from "@testing-library/react";
import {render} from '@testing-library-react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/Navbar'
import PlayersCard from './components/PlayersCard'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test ('Is there a toggle?', () => {
  const { findAllByDisplayValue } = render(<Navbar />);

  findAllByDisplayValue(/toggle/i);
})

test ('Is there a player?', () => {
  const { findByText } = render(<PlayersCard />);

  findByText(/player/i);
})

test('Test and display name country and ID', () => {
  const {getByTestId} = render(<App />);

  getByTestId(/playersName/i);
  getByTestId(/playersCountry/i);
  getByTestId(/playersId/i);    

})

// const originalError = console.error
// beforeAll(() => {
//   console.error = (...args) => {
//     if (/Warning.*not wrapped in act/.test(args[0])) {
//       return
//     }
//     originalError.call(console, ...args)
//   }
// })

// afterAll(() => {
//   console.error = originalError
// })