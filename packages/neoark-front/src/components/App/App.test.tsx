import React from 'react';
import { render } from '@testing-library/react';
import App from '.';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <App routes={[]} />
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
