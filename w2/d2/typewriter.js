const sentence = "hello there from lighthouse labs";
let timer = 0;

// loop that goes through each individual character
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char); // outputs each character after timer amount
  }, timer += 50); // adds 50ms to timer after every letter
}
setTimeout(() => {
  console.log("");
}, timer); // adds second line after final timer.
