import { divide } from './App';

// test.skip('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('divide function', () => {
  // describe('when given to integers', () => {
  it('should return a division result', () => {
    // Test goes here...
    const [a, b, expected] = [10, 2, 5];

    // Here we use array destructuring
    // to assing `a === 10`, `b === 2`,
    // and `expected === 5`.

    // Act: use the `divide` function
    // to get an actual function result.
    const result = divide(a, b);

    // Assert: compare expected result
    // with a function result.
    expect(result).toEqual(expected);
  });
  // });
});
