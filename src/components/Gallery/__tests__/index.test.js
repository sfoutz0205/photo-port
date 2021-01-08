import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';

const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

// gallery rendering test
describe('Gallery is rendering', () => {
  it('renders', () => {
    render(<Gallery currentCategory={portrait} />);
  });
// gallery snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />)
    expect(asFragment()).toMatchSnapshot()
  });
});

// gallery title test
describe('Gallery title', () => {
  it('renders', () => {
    const { getByTestId } = render(<Gallery currentCategory={portrait} />)
    expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
  });
});
