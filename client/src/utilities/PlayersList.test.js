import { render } from '@testing-library/react';


test('Test that ball count and strike count are rendered on Display', () => {
    const {getByTestId} = render(<App />);
  
    getByTestId(/playersName/i);
    getByTestId(/playersCountry/i);
    getByTestId(/playersId/i);    
  
  })


  