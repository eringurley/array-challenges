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

module.exports = { multiplesOfN, uniqueValues };

