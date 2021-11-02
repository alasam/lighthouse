// Grabs info from terminal and assigns to args variable
const args = process.argv[2];
let rolls = [];

// function that generates a number between 1 and 6
function rollDice() {
  return Math.floor(Math.random() * (7 - 1) ) + 1;
}

// loop that adds a random number generated from  rollDice and add it to the roll array
for (let i = 0; i < args; i++) {
  rolls.push(rollDice())
};

// prints answer and changes rolls into a string
console.log(`Rolled ${args} dice: ${rolls.join(', ')}`);