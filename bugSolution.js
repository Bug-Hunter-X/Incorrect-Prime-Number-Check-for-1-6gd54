function checkIfPrime(number) {
  if (number <= 1) {
    return false; 
  }
  if (number <=3 ) return true; // Handle 2 and 3
  if (number % 2 === 0 || number % 3 === 0) return false; //Handle multiples of 2 and 3 
  for (let i = 5; i * i <= number; i = i + 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false; 
    }
  }
  return true;
}

console.log(checkIfPrime(17)); //true
console.log(checkIfPrime(2)); // true
console.log(checkIfPrime(1)); //false
console.log(checkIfPrime(15)); // false