import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  await waitFor(() => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeNull();
  });
});









// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
