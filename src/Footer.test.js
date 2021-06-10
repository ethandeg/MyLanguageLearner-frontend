import { render, screen } from '@testing-library/react';
import Footer from './Footer';
//smoke test
test('renders without crashing', () => {
  render(<Footer />);

});

//snapshot test

test("matches snapshot", () => {
    const {asFragment} = render(<Footer />)
    expect (asFragment()).toMatchSnapshot()
})
