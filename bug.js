function checkIfPrime(number) {
  if (number <= 1) {
    return false; 
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; 
    }
  }
  return true;
}

console.log(checkIfPrime(17)); //true
console.log(checkIfPrime(2)); // true
console.log(checkIfPrime(1)); //false
console.log(checkIfPrime(15)); // false