const STARTING_POKER_CHIPS = 100; // points
const PLAYERS = 3;
const NO_OF_STARTER_CARDS = 2;

let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

console.log(`\n\n Before Updatation \n\n`);
console.log(`playerOnePoints ${playerOnePoints}`);
console.log(`playerTwoPoints ${playerTwoPoints}`);
console.log(`playerThreePoints ${playerThreePoints} \n\n`);

console.log(`After Updatation \n\n`);

playerOnePoints -= 50;
playerTwoPoints -=25;
playerThreePoints +=75;


console.log(`playerOnePoints ${playerOnePoints}`);
console.log(`playerTwoPoints ${playerTwoPoints}`);
console.log(`playerThreePoints ${playerThreePoints}`);