import React from 'react';
import { render } from '@testing-library/react';
import MiceAndDragons from './game';


test('renders learn react link', () => {
  const { getByText } = render(<MiceAndDragons />);
  const element = getByText(/learn react/i);
  expect(element).toBeInTheDocument();
});
