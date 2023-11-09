const compareNumbers = (a, b) => {
  return a - b;
};

export const randomNumberGenerator = (min, max, numCount) => {
  const numbers = [];

  for (let i = 0; i < numCount; i++) {
    // Generate a random number between 1 and 42
    let number = Math.floor(Math.random() * max) + min;

    // Check if the number is already in the array
    if (min !== 0 && numbers.includes(number)) {
      // If yes, call the function again to get a different number
      return randomNumberGenerator(min, max, numCount);
    } else {
      // If no, push the number to the array and return it
      numbers.push(number);
      // return number;
    }
  }

  numbers.sort(compareNumbers);

  return numbers;
};
