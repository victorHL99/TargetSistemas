console.log("Question 2: Fibonacci");

function calculateFibonacci(num) {
  let startArray = [0, 1];

  for (let i = 2; i <= num; i++) {
    startArray.push(startArray[i - 2] + startArray[i - 1]);
  }

  if (startArray.includes(num)) {
    console.log("The number " + num + " is in the Fibonacci sequence.");
  } else {
    console.log("The number " + num + " is not in the Fibonacci sequence.");
  }
}
// Modify the number below to test different numbers
calculateFibonacci(55);
