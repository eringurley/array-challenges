function multiplesOfN(num){
  let filtered = [];
  
  for(let i = 1; i <= 100; i++) {
    if(i % num === 0) {
      filtered.push(i)
    }
  }
  return filtered;
}

function uniqueValues(arr) {
  let unique = [...new Set(arr)];
  return unique;
};

function commonNums(array1, array2) {
  array1.filter(function(val) {
    return array2.indexOf(val) !== -1;
  })
};


module.exports = { multiplesOfN, uniqueValues, commonNums };

