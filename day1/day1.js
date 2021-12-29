const fs = require("fs");
// const input = [1, 2, 3, 4, 5, 6, 7, 1, 9, 10];

fs.readFile("input-data.txt", "utf-8", (err, data) => {
  const input = data.split("\n").map((x) => Number(x));
  // data.split = a new data determine from a new line,
  // map number = changing them from string into number

  console.log(input);
  let counter = 0; /* to have a counter to */

  for (let i = 0; i < input.length; i++) {
    const firstVal = input[i]; /* to counter the first value  */
    const secondVal = input[i + 1];

    if (secondVal > firstVal) {
      ++counter;
    }
  }
  console.log("counter", counter);
});
