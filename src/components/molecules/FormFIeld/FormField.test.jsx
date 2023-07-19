/* eslint-disable no-undef */
import { useState } from 'react';
import { render, screen } from '@testing-library/react';

const InputWithButton = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input value={inputValue} onChange={handleInputChange} name="Name" id="name" placeholder="Enter your name" type="text" />
      <button disabled>{!inputValue}Submit</button>
    </>
  );
};

describe('Input With Button', () => {
  it('Renders the component', () => {
    render(<InputWithButton />);
    screen.getByText('Submit');
  });
});
