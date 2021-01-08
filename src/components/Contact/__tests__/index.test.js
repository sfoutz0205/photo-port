import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact form renders', () => {
  // baseline render test
  it('renders', () => {
    render(<ContactForm />);
  })
  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />)
    expect(asFragment()).toMatchSnapshot()
  });
});

// title test
describe('ContactForm title', () => {
  it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact Me')
  });
});

// title test
describe('ContactForm button text', () => {
  it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('btntag')).toHaveTextContent('Submit')
  });
});

