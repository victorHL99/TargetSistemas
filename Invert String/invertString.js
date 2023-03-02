console.log("Question 5: Invert String");

function invertString(string) {
  let reverseString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }

  return console.log(reverseString);
}

invertString("Hello World!");
invertString("I love JavaScript!");
invertString("Target Sistemas");
