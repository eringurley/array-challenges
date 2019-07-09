const { multiplesOfN, uniqueValues, } = require('./index');

//describe  filtered
describe('filter function', () => {
  it('returns an array of nums',  () => {
    const filtered = multiplesOfN(5);
    expect(filtered).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]);
  });

  it('returns an array of nums',  () => {
    const filtered = multiplesOfN(10);
    expect(filtered).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
  });

  it('returns an array of nums',  () => {
    const filtered = multiplesOfN(101);
    expect(filtered).toEqual([]);
  });
});

describe('unique values', () => {
  it('returns each unique value in an arry', () => {
    const uniqueArrayValues = uniqueValues([3, 3, 5, 3, 12, 7]);
    expect(uniqueArrayValues).toEqual([3, 5, 12, 7]);
  });
});

// describe('intersection between two arrays', () => {
//   it('returns the common numbers that exist in two arrays', () => {
//     const array1 = [2, 2, 4, 1];
//     const array2 = [1, 2, 0, 2];
//     const newArray = [];
//     const commonNumsArray = commonNums(array1, array2)
//     expect(commonNumsArray).toEqual([2, 1]);
//   });
// });
