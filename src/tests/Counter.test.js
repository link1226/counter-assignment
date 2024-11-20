// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
// import the Counter component here
import Counter from '../components/Counter';
beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('-1');
});
