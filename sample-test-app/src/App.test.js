import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

describe("App Test", () => {

  afterEach(() => {
    cleanup();
  });

  test('App displays employee name properly', () => {
    render(<App />);
    const employeeName = screen.getByText(/Niccolo Lampa/i);
    expect(employeeName).toBeInTheDocument();
  });


  test('App displays company name properly', () => {
    render(<App />);
    const companyName = screen.getByText(/The Data Life/i);
    expect(companyName).toBeInTheDocument();
  });

})
