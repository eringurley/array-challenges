//describe  filtered
describe('filter function', () => {
  it('returns an array of nums',  () => {
    const num = 5
    const filtered = num.filter(numbers, number => number % 5 === 0);
    expect(filtered).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]);
  });
});
