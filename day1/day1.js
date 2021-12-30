const fs = require("fs");
// const input = [1, 2, 3, 4, 5, 6, 7, 1, 9, 10];

fs.readFile("input-data.txt", "utf-8", (err, data) => {
  const input = data.split("\n").map((x) => Number(x));
  // data.split = a new data determine from a new line,
  // map number = changing them from string into number

  const valuesToCheck = [];
  let counter = 0; /* to have a counter to */

  for (let i = 0; i < input.length; i++) {
    //--second part of question--//
    valuesToCheck.push(input.slice(i, i + 3).reduce((acc, v) => acc + v, 0));
  }

  for (let i = 0; i < valuesToCheck.length; i++) {
    const firstVal = valuesToCheck[i]; /* to counter the first value  */
    const secondVal = valuesToCheck[i + 1];

    if (secondVal > firstVal) {
      ++counter;
    }
  }
  //-------------------------//
  //--first part of question--//
  // const firstVal = input[i]; /* to counter the first value  */
  // const secondVal = input[i + 1];

  // if (secondVal > firstVal) {
  //   ++counter;
  // }

  console.log("counter", counter);
});
