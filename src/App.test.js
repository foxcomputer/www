import { render, screen } from '@testing-library/react';
import App from './App';

test('renders fox.computer brand', () => {
  render(<App />);
  const brandElement = screen.getAllByText(/fox.computer/i)[0];
  expect(brandElement).toBeInTheDocument();
});
