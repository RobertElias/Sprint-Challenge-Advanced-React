import {getByText, fireEvent} from '@testing-library/dom';

test('Tests darkmode working', ()=>{
    const darkModeBtn = getByText('Dark Mode');
    const darkModeOn = getByText('Dark Mode On');

    fireEvent.cleck(darkModeBtn);
    expect(darkModeOn).hasTextContent()
})