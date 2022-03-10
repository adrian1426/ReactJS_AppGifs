import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Los gifs más populares/i);
  expect(linkElement).toBeInTheDocument();
});
