// Monkey patching- mocking func output
// run file- node src/testing-func-test2/set1.js --------------

var assert = require('assert');

function getWinner(player1, player2){
  return  Math.random() < 1/3 ? player1 : player2;
}

//--- part one

// const winner = getWinner('Hanky','Panky');
// assert.strictEqual(winner, 'Hanky')

//--- part two

// getWinner = (p1, p2) => p1; 

// const winner = getWinner('Hanky','Panky');
// assert.strictEqual(winner, 'Hanky')

//--- part three
const originalGetWinner = getWinner;
console.log('Function original ', getWinner.toString());
getWinner = (p1, p2) => p1; 

const winner = getWinner('Hanky','Panky');
assert.strictEqual(winner, 'Hanky')

console.log('Function after mocking ', getWinner.toString());
getWinner = originalGetWinner; // clean up
console.log('Function resetting mocking ', getWinner.toString());
