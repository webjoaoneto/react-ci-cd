import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('test if 1 + 1 is 2', async () => {
  const { getByText, findByPlaceholderText, getByTestId } = render(<App />);
  const input1 = await findByPlaceholderText( 'op1');
  const input2 = await findByPlaceholderText( 'op2');

  fireEvent.change( input1, { target: { value: 1 } } );
  fireEvent.change( input2, { target: { value: 1 } } );

  fireEvent.click( getByText('Somar') );

  const somaResult = getByTestId('somaResult');

  expect(somaResult.textContent).toBe('2')
});