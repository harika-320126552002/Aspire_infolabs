/**
 * 
 * Brief :Java Program to generates Consecutive numbers in a given range(<=10^7) and returns the count of prime numbers out of them.
 * Author:Bagadhi Harika
 * Date  : May 26,2023
 * 
 */


/**
 * @description isPrime -Checks whether a given number is prime or not.
 *
 * @param {string} number - The number to check for primality.
 * @return {boolean} - True if the number is prime, false otherwise.
 */
function isPrime(number)
 {
    let num = parseInt(number);

    if (num === 1)
    { // 1 is not a prime number
         return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) 
    { // If the number is divisible by any other number, it is not prime
      if (num % i === 0)
       {
      return false;
       }
    }

    return true; // The number is prime if it passes all the checks
 }
  
  /**
   * @description oddNumbers-Recursively generates consecutive odd numbers and checks if they are prime. Increments the count for each prime number found.
   *
   * @param {string} currentNumber - The current number being generated.
   * @param {object} primeCount - An object containing the count of prime numbers.
   * @param {number} iterations - The maximum number of iterations to generate odd numbers.
   */
  function oddNumbers(currentNumber, primeCount, iterations) 
  {
    if (currentNumber.length > iterations)
    { // Stop generating numbers if the length exceeds the specified iterations
      return;
    }
  
    if (isPrime(currentNumber)) 
    {// Increment the count if the current number is prime
      primeCount.count++; 
    }
  
    if (currentNumber[currentNumber.length - 1] === '0')
    {
      oddNumbers(currentNumber + '1', primeCount, iterations); // Recursively generate the next number by appending '1'
    } 
    
    else if (currentNumber[currentNumber.length - 1] === '9') 
    {
      oddNumbers(currentNumber + '8', primeCount, iterations); // Recursively generate the next number by appending '8'
    } 

    else
     {
      let lastDigit = parseInt(currentNumber[currentNumber.length - 1]);
      oddNumbers(currentNumber + (lastDigit + 1), primeCount, iterations); // Recursively generate the next number by incrementing the last digit
      oddNumbers(currentNumber + (lastDigit - 1), primeCount, iterations); // Recursively generate the next number by decrementing the last digit
    }
  }

    /**
     * @description validateIterations - Validates the iterations input to ensure it's an integer within a specified range.
     *
     * @param {number} iterations - The maximum number of iterations to generate odd numbers.
     * @returns {boolean} - True if iterations is valid, false otherwise.
     */

  function validateIterations(iterations)
   {
    if (!Number.isInteger(iterations))
    { // Check if the input is not an integer
      console.log("Invalid input.");
      return false;
    }

    if (iterations < 0 || iterations > 30) 
    { // Check if the input is out of range
      console.log(`Iterations must be between 0 and 30.`);
      return false;
    }
    return true; // True if
   }
  
  /**
   * Driver  code 
   * Generates consecutive odd numbers and counts the prime numbers found within a certain range.
   *
   * @param {number} iterations - The maximum number of iterations to generate consecutive odd numbers.
   */
  function main() {
    //let iterations=1.234566;
    
    let iterations= 7;//change the iteration value  as per the range specified in powers of 10
    
    // Start measuring the elapsed time
    let startTime = process.hrtime.bigint();
  
    // Object to store the count of prime numbers
    let primeCount = { count: 0 };

    if(!validateIterations(iterations))
    {
        return;
    }
  
    // Generate odd numbers and count the prime numbers
    for (let i = 1; i < 10; i++) {
      oddNumbers(i.toString(), primeCount, iterations);
    }
  
    // Stop measuring the end time
    let endTime = process.hrtime.bigint();
  
    // Calculate the elapsed time in nanoseconds
    let elapsedTime = endTime - startTime;
    // Print the elapsed time and the count of prime numbers
    console.log("Elapsed Time: " + elapsedTime.toString() + " nanoseconds");
    console.log("Total number of primes: " + primeCount.count);
  }
  
  // Run the program 
  main();
  

