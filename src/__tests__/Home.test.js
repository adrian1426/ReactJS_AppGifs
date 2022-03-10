import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('Formulario', async () => {
  render(<App />);

  const input = await screen.findByRole('textbox');
  fireEvent.change(input, { target: { value: 'matrix' } });
  fireEvent.submit(input);

  const title = await screen.findByText('matrix');
  //console.log(title.outerHTML);
  expect(title).toBeVisible();
});
