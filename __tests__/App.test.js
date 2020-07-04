import React from 'react';
import App from '../src/App';

import { render } from '@testing-library/react-native';

it('should render App without crash', () => {
  const tree = render(<App />);
  expect(tree).toMatchSnapshot();
});
