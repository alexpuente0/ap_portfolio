import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home heading', () => {
  render(<App />);
  const headings = screen.getAllByRole('heading');
  expect(headings.length).toBeGreaterThan(0);
});
