function multiplesOfN(num){
  let filtered = [];
  
  for(let i = 1; i <= 100; i++) {
    if(i % num === 0) {
      filtered.push(i)
    }
  }
  return filtered;
}

module.exports = { multiplesOfN };

//while i < 100, at any given point i is n; we  can check to see if that number is divisible by the 
//number coming in from the function -function if num is 
//divisible by I, push to new array, then retrun that array when done  with the for loop

