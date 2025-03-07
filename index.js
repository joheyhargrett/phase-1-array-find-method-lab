// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]



function superbowlWin(record) {
  const winningYear = record.find(game => game.result === "W");

  return winningYear ? winningYear.year : undefined;


};


//Another way I could have completed this function using for of loop with arrow function

// const superbowlWin = (record) => {
//   for (let game of record) {
//     if (game.result === "W") {
//       return game.year;
//   }
//   return undefined;
// }










