import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

test('renders learn react link', () => {
  render(<Button>button</Button>);
  const linkElement = screen.getByText(/button/i);
  expect(linkElement).toBeInTheDocument();
});
