function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

// Example
const nums = [10, 20, 30, 40, 50];
console.log("Average:", calculateAverage(nums));