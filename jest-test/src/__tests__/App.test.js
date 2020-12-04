import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'

test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// snapshot test 
describe(`Snapshot test of App`, () => {

  test.skip(` it should match the snapshot every time it is rendered`, () => {
    const instance = create(<App/>).toJSON(); // it returns an object representting the rendered tree. 
    expect(instance).toMatchSnapshot();
    // it will create a snapshotfor the first time if it doesn't already exists
  });
});
