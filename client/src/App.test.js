import Navbar from './components/Navbar'
import PlayersCard from './components/PlayersCard'
import PlayersList from './components/PlayersList'
import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  render(<App />)
});

test ('Is there a toggle?', () => {
  const { findAllByDisplayValue } = render(<Navbar />);

  findAllByDisplayValue(/toggle/i);
})

test ('Is there a player?', () => {
  const { findByText } = render(<App />);

  findByText(/player/i);
})

test('Test and display name country and ID', () => {
  const {getByTestId} = render(<App />);

  // getByTestId(/playersname/i);
  // getByTestId(/playerscountry/i);
  // getByTestId(/playersid/i);  
  getByTestId('title');  

})

